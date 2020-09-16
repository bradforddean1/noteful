import React from "react";
import { Route } from "react-router-dom";
import Store from "../Store.context";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import FolderList from "../FolderList/FolderList";
import NotePage from "../NotePage/NotePage";
import NoteSidebar from "../NoteSidebar/NoteSidebar";
import AddNote from "../AddNote/AddNote";
import AddFolder from "../AddFolder/AddFolder";
import "reset-css";
import "./App.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

/**
 *@component
 */
class App extends React.Component {
  state = { folders: [], notes: [] };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/notes"),
      fetch("http://localhost:9090/folders"),
    ])
      .then(([notesRes, foldersRes]) => {
        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notesJson, foldersJson]) => {
        this.setState({ notes: notesJson, folders: foldersJson });
      })
      .catch((e) => console.log(e));
  }

  handleDeleteNote = (id) => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        const newNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: newNotes });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  handleAddFolder = (data) => {
    fetch("http://localhost:9090/folders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Add folder failed");
        }
        return res.json();
      })
      .then((resJson) => {
        let folders = [...this.state.folders];
        folders.push(resJson);
        this.setState({ folders: folders });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleAddNote = (data) => {
    fetch("http://localhost:9090/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Add note failed");
        }
        return res.json();
      })
      .then((resJson) => {
        let notes = [...this.state.notes];
        notes.push(resJson);
        this.setState({ notes: notes });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderSidebar() {
    return (
      <div className="sidebar">
        <Route exact path="/" component={FolderList} />
        <Route path="/folder/:folderId" component={FolderList} />
        <Route path="/note/:noteId" component={NoteSidebar}></Route>
        <Route path="/add-folder" component={NoteSidebar} />
        <Route path="/add-note" component={NoteSidebar} />
      </div>
    );
  }

  renderContent() {
    return (
      <div className="content">
        <Route exact path="/" component={NoteList} />
        <Route exact path="/folder/:folderId" component={NoteList} />
        <Route path="/note/:noteId" component={NotePage} />
        <Route
          path="/add-folder"
          render={({ history }) => (
            <AddFolder history={history} handleSubmit={this.handleAddFolder} />
          )}
        />
        <Route
          path="/add-note"
          render={({ history }) => (
            <AddNote history={history} handleSubmit={this.handleAddNote} />
          )}
        />
      </div>
    );
  }

  render() {
    return (
      <Store.Provider
        value={{
          notes: this.state.notes,
          folders: this.state.folders,
          deleteNote: this.handleDeleteNote,
        }}
      >
        <ErrorBoundary>
          <div className="App">
            <Header />
            <main>
              {this.renderSidebar()}
              {this.renderContent()}
            </main>
          </div>
        </ErrorBoundary>
      </Store.Provider>
    );
  }
}

export default App;

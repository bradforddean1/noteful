import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import FolderList from "../FolderList/FolderList";
import NotePage from "../NotePage/NotePage";
import PropTypes from "prop-types";
import "./App.css";

/**
 *
 *@component
 */

class App extends React.Component {
  static defaultProps = { store: {} };

  state = { store: this.props.store };

  getNotesForFolder(notes = [], folderId) {
    if (folderId) {
      return notes.filter((note) => note.folderId === folderId);
    }
    return notes;
  }

  renderSidebar() {
    return (
      <div className="sidebar">
        {["/", "/folder/:folderId"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={() => {
              return (
                <FolderList
                  folders={this.state.store.folders}
                  notes={this.state.store.notes}
                />
              );
            }}
          />
        ))}
        <Route path="/note/:note-id" render={() => {}}></Route>
        <Route path="/add-folder" component={FolderList} />
        <Route path="/add-note" component={FolderList} />
      </div>
    );
  }

  renderContent() {
    const note = {
      id: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Dogs",
      modified: "2019-01-03T00:00:00.000Z",
      folderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content:
        "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad.",
    };
    return (
      <div className="content">
        <Route
          exact
          path="/"
          render={(routeProps) => {
            return <NoteList notes={this.state.store.notes} />;
          }}
        />
        <Route
          path="/folder/:folderId"
          render={(routeProps) => {
            return (
              <NoteList
                notes={this.getNotesForFolder(
                  this.state.store.notes,
                  routeProps.match.params.folderId
                )}
              />
            );
          }}
        />
        <Route
          path="/note/:noteId"
          render={() => {
            return (
              <NotePage
                id={note.id}
                modDate={note.modified}
                name={note.name}
                content={note.content}
              />
            );
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.renderSidebar()}
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

App.propTypes = {};

export default App;

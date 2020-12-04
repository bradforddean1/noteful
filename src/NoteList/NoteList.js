import React, { useContext } from "react";
import Store from "../Store.context";
import PropTypes from "prop-types";
import Note from "../NoteHeader/NoteHeader";
import "./NoteList.css";
import { Link } from "react-router-dom";

/**
 *@component
 */
function NoteList(props) {
  const store = useContext(Store);

  function getNotesForFolder(notes = [], folderId) {
    if (folderId) {
      return notes.filter((note) => note.folderId === folderId);
    }
    return notes;
  }

  const notes = getNotesForFolder(store.notes, props.match.params.folderId).map(
    (note) => {
      return (
        <Note
          key={note.id}
          modDate={note.modified}
          name={note.name}
          id={note.id}
          deleteNote={(id) => {
            store.deleteNote(id);
          }}
        />
      );
    }
  );

  return (
    <div className="NoteList">
      {[notes]}
      <Link to="/add-note" className="button">
        Add Note
      </Link>
    </div>
  );
}

NoteList.defaultProps = {
  match: { params: { folderId: "" } },
};


NoteList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ folderId: PropTypes.string }),
  }),
};

export default NoteList;


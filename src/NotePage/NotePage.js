import React, { useContext } from "react";
import Store from "../Store.context";
import PropTypes from "prop-types";
import NoteHeader from "../NoteHeader/NoteHeader";
import "./NotePage.css";

/**
 *
 *@component
 */
function NotePage(props) {
  const store = useContext(Store);

  function getSelected(notes, noteId) {
    if (!noteId) {
      return [{}];
    }

    return notes.filter((note) => noteId === note.id);
  }

  const note = getSelected(store.notes, props.match.params.noteId)[0] || {};

  return (
    <>
      <div className="NotePage">
        <NoteHeader
          modDate={note.modDate}
          name={note.name}
          id={note.id}
          deleteNote={(id) => {
            store.deleteNote(id);
            props.history.push("/");
          }}
        />
      </div>
      <p>{note.content}</p>
    </>
  );
}

NotePage.defaultProps = {
  match: { params: { folderId: "" } },
};

NotePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ folderId: PropTypes.string }),
  }),
};

export default NotePage;

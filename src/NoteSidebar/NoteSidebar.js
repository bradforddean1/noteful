import React, { useContext } from "react";
import "./NoteSidebar.css";
import PropTypes from "prop-types";
import Store from "../Store.context";

/**
 *
 *@component
 */
function NoteSidebar(props) {
  const store = useContext(Store);
  const noteId = props.match.params.noteId;

  function getFolder(store, id) {
    const notes = store.notes;
    const folders = store.folders;

    const noteSelected = notes.filter((note) => {
      return note.id === id;
    });

    const folderOfNoteSelected = folders.filter((folder) => {
      return folder.id === noteSelected[0].folderId;
    });

    return folderOfNoteSelected[0].name;
  }

  return (
    <div className="NoteSidebar">
      <button className="button" onClick={() => props.history.goBack()}>
        Go back
      </button>
      {!!noteId && <h2>{getFolder(store, noteId)}</h2>}
    </div>
  );
}

NoteSidebar.defaultProps = {
  history: {
    goBack: () => {},
  },

  match: {
    params: {},
  },
};

NoteSidebar.propTypes = {
  /**
   * Function return to prior page (React Router history)
   */
  history: PropTypes.shape({ goBack: PropTypes.func }),
  /**
   * React Router params
   */
  match: PropTypes.shape({
    params: PropTypes.shape({ noteId: PropTypes.string }),
  }),
};

export default NoteSidebar;

import React from "react";
import Note from "../NoteHeader/NoteHeader";
import "./NoteList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 *
 *@component
 */
function NoteList(props) {
  const notes = props.notes.map((note) => {
    return <Note modDate={note.modified} name={note.name} id={note.id} />;
  });

  return (
    <div className="NoteList">
      {[notes]}
      <Link className="button">Add Note</Link>
    </div>
  );
}

NoteList.propTypes = {
  /**
   * Notes to be rendered
   */
  notes: PropTypes.array,
};

NoteList.defaultProps = {
  notes: [],
};

export default NoteList;

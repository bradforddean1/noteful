import React from "react";
import NoteHeader from "../NoteHeader/NoteHeader";
import "./NotePage.css";
import PropTypes from "prop-types";

/**
 *
 *@component
 */
function NotePage(props) {
  return (
    <>
      <div className="NotePage">
        <NoteHeader modDate={props.modDate} name={props.name} id={props.id} />
      </div>
      <p>{props.content}</p>
    </>
  );
}

NotePage.propTypes = {
  /**
   * Example prop
   */
  example: PropTypes.string.isRequired,
};

NotePage.defaultProps = {};

export default NotePage;

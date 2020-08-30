import React from "react";
import "./NoteHeader.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "moment";

/**
 *
 *@component
 */
function NoteHeader(props) {
  const date = new Moment(props.modDate).format("MM-DD-YYYY");
  const linkRoute = "/note/".concat(props.id);

  return (
    <div className="NoteHeader">
      <div className="top">
        <h2>
          <Link to={linkRoute}>{props.name}</Link>
        </h2>
      </div>
      <div className="bottom">
        <span>Date modified on {date}</span>
        <button
          onClick={() => {
            return;
          }}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
}

NoteHeader.propTypes = {
  name: PropTypes.string,
  modDateate: PropTypes.string,
  id: PropTypes.string,
};

NoteHeader.defaultProps = {
  name: "_",
};

export default NoteHeader;

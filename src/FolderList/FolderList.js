import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./FolderList.css";

/**
 *
 *@component
 */
function FolderList(props) {
  const folders = props.folders.map((folder) => {
    const linkPath = "/folder/".concat(folder.id);
    return (
      <li className="folder">
        <NavLink to={linkPath}>{folder.name}</NavLink>
      </li>
    );
  });
  return (
    <ul className="FolderList">
      {[folders]}
      <Link to="/add-folder" className="button">
        Add Folder
      </Link>
    </ul>
  );
}

FolderList.propTypes = {
  folders: PropTypes.array,
};

FolderList.defaultProps = {
  folders: [],
};

export default FolderList;

import React, { useContext } from "react";
import Store from "../Store.context";
import { Link, NavLink } from "react-router-dom";
import "./FolderList.css";

/**
 *
 *@component
 */
function FolderList(props) {
  const store = useContext(Store);

  const folders = store.folders.map((folder) => {
    const linkPath = "/folder/".concat(folder.id);
    return (
      <li key={folder.id} className="folder">
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

export default FolderList;

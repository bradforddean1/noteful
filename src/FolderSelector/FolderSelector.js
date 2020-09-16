import React, { useContext } from "react";
import "./FolderSelector.css";
import PropTypes from "prop-types";
import Store from "../Store.context";

/**
 *
 *@component
 */
function FolderSelector(props) {
  const store = useContext(Store);
  return (
    <div className="FolderSelector form-group">
      <label for="folder">Folder</label>
      <select
        id="folder"
        name="folder"
        onChange={(e) => props.handleChange(e.target.value)}
      >
        <option hidden disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>

        {store.folders.map((folder) => {
          return (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

FolderSelector.propTypes = {
  /**
   * Update Selected Folder Callback
   */
  handleChange: PropTypes.func,
};

export default FolderSelector;

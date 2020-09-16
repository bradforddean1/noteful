import React from "react";
import "./AddNote.css";
import PropTypes from "prop-types";
import ValidationError from "../ValidationError/ValidationError";
import FolderSelector from "../FolderSelector/FolderSelector";

/**
 * Form for adding new note
 *@component
 */
class AddNote extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      name: { value: "", touched: false },
      content: { value: "" },
      folder: { value: "", touched: false },
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } });
  }

  updateFolder(folder) {
    this.setState({ folder: { value: folder, touched: true } });
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Note name is required";
    }
  }

  validateFolder() {
    const folder = this.state.folder.value.trim();
    if (folder.length === 0) {
      return "Folder Selection is required";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, content, folder } = this.state;
    this.props.handleSubmit({
      name: name.value,
      content: content.value,
      folderId: folder.value,
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="AddNote">
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label for="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Note Name"
              onChange={(e) => this.updateName(e.target.value)}
            />
          </div>
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
          <div className="form-group">
            <label for="content"></label>
            <input
              type="text"
              id="content"
              name="content"
              placeholder="Note Content"
              onChange={(e) => this.updateContent(e.target.value)}
            />
          </div>
          <FolderSelector
            handleChange={(folder) => this.updateFolder(folder)}
          />
          {this.state.folder.touched && (
            <ValidationError message={this.validateFolder()} />
          )}

          <button
            type="submit"
            className="button"
            disabled={this.validateName() || this.validateFolder()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddNote.propTypes = {
  /**
   * History object (React Router) containes push function to route new path after submit.
   */
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  /**
   * Handle form submission
   */
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNote;

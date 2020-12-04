import React from "react";
import "./AddFolder.css";
import PropTypes from "prop-types";
import ValidationError from "../ValidationError/ValidationError";

/**
 *
 *@component
 */
class AddFolder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			folder: { value: "", touched: false },
		};
	}

	static defaultProps = {};

	updateFolder(folder) {
		this.setState({ folder: { value: folder, touched: true } });
	}

	validateInput() {
		const name = this.state.folder.value.trim();
		if (name.length === 0) {
			return "Folder name is required";
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const { folder } = this.state;
		this.props.handleSubmit({ name: folder.value });
		this.props.history.push("/");
	}

	render() {
		return (
			<div className="AddFolder">
				<form className="" onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group">
						<label htmlFor="name"></label>
						<input
							type="text"
							name="name"
							placeholder=""
							onChange={(e) => {
								this.updateFolder(e.target.value);
							}}
						/>
					</div>
					<ValidationError
						message={!!this.state.folder.touched && this.validateInput()}
					/>
					<button
						type="submit"
						className="button"
						disabled={this.validateInput()}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

AddFolder.propTypes = {
	/**
	 * History object (React Router) containes push function to route new path after submit.
	 */
	history: PropTypes.shape({ push: PropTypes.func }).isRequired,
	/**
	 * Handle form submission
	 */
	handleSubmit: PropTypes.func.isRequired,
};

export default AddFolder;

import React from "react";
import "./ValidationError.css";
import PropTypes from "prop-types";

/**
 *
 *@component
 */
function ValidationError(props) {
  if (props.message) {
    return <div className="ValidationError">{props.message}</div>;
  }

  return <></>;
}

ValidationError.propTypes = {
  /**
   * Error message
   */
  message: PropTypes.string,
};

export default ValidationError;

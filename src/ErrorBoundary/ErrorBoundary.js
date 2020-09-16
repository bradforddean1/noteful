import React from "react";
import "./ErrorBoundary.css";

/**
 *
 *@component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Something went wrong...</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component } from "react";
import { Link } from "react-router-dom"; // eslint-disable-line

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There is an error. <Link to="/">Click here</Link> to go back to the
          home page
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

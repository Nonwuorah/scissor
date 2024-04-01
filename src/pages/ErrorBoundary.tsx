import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    // log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if ((this.state as {hasError:boolean}).hasError) {
      // show fallback UI
      return (
        <div className="ErrorBoundary">
          <h1>Something went wrong</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    // otherwise, render children normally
    return (this.props as {children:any}).children;
  }
}

export default ErrorBoundary;

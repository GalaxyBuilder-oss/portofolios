// components/ErrorBoundary.tsx
import React from 'react';

class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to the server console
    console.error('Error caught in Error Boundary:', error, errorInfo);
    // Optionally, you can send errors to an external logging service here
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
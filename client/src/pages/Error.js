import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <p className="error-status">404!</p>
      <h1>Page doesn't exist</h1>
      <img src="/img/best-pizza-error.svg" alt="Error image" />
      <Link to="/" type="button" className="btn btn--secondary">
        Home
      </Link>
    </div>
  );
};

export default Error;

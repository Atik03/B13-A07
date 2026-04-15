import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-focus transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

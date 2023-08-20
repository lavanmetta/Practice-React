/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { Authentication } from "./Home";
function ProtectedRoute({ element }) {
  const authenticated = Authentication();

  if (authenticated) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;

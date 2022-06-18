import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthWrapper({ children }) {
  const authStatus = useSelector((store) => store.auth);

  if (authStatus) {
    return children;
  }
  return <Navigate to="/signup" state="/cart" />;
}

export default AuthWrapper;

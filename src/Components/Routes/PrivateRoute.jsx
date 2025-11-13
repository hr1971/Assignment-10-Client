import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, replace, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
    // replace
  }

  return children;
};

export default PrivateRoute;

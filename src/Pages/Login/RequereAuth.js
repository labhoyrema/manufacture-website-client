import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequereAuth = ({ children }) => {
  const [user, loading, eroor] = useAuthState(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return children;
};

export default RequereAuth;

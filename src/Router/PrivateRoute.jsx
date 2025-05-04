import React, { use } from "react";
import { AuthContext } from "../ConText/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
   
  const location = useLocation()
  // console.log(location.pathname);

  if (loading) {
    return(
        <div className="text-center mt-60">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;

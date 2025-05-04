import React from "react";
import MainNavBar from "../Components/MainNavBar";
import { Outlet } from "react-router";

const AuthLayOut = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <MainNavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayOut;

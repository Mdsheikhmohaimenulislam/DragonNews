import React, { use } from "react";
import { IoIosContact } from "react-icons/io";
import { Link, Links, NavLink } from "react-router";
import { AuthContext } from "../ConText/AuthContext";

const MainNavBar = () => {
  const { user, LogOut } = use(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto flex justify-between mb-15">
      <div></div>
      <div className="space-x-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Career</a>
      </div>
      <div className="flex items-center gap-1">
        {user && user.photoURL ? (
          <img
            className="w-[45px] h-[45px] rounded-full"
            src={user.photoURL}
            alt="photo"
          />
        ) : (
          <IoIosContact size={45} />
        )}
        {/* <img className="w-[45px] rounded-full" src={`${user? user.photoURL : <IoIosContact size={40} />}`} alt="photo" /> */}
        <div className="btn px-10 bg-secondary text-base-100 p-2 cursor-pointer">
          {user ? (
            <Link to="/auth/login" onClick={handleLogOut}>
              Log Out
            </Link>
          ) : (
            <Link to="/auth/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;

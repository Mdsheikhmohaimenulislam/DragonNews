import React, { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../ConText/AuthContext";

const SocialLogin = () => {
  const { user } = use(AuthContext);

  return (
    <>
    
      {user ? (
        ""
      ) : (
        <div>
          <h1 className="font-bold mb-5">Login With</h1>
          <div className="space-y-3 flex flex-col">
            <button className="btn btn-outline btn-primary">
              {" "}
              <FaGoogle size={20} /> Login With Google
            </button>
            <button className="btn btn-outline btn-secondary">
              {" "}
              <FaGithub size={22} /> Login With GitHub
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLogin;

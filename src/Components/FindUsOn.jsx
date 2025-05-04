import React from "react";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router";

const FindUsOn = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Find Us On</h1>
      <div className="flex flex-col justify-start">
        <button className="btn btn-outline btn-primary justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn btn-outline btn-secondary justify-start">
          <FaTwitterSquare />
          Twitter
        </button>
        <button className="btn btn-outline btn-secondary justify-start">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;

import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../ConText/AuthContext";
// import { useHistory } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  // const history = useHistory();
  // console.log(history);

  const [nameError, setNameError] = useState("");

  // console.log(user);
  const { createRegister, profileSet, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

    createRegister(email, password)
      .then((result) => {
        const user = result.user;

        // profile set
        profileSet({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
          });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-2xl font-bold">Register your account</h1>
      </div>
      <form onSubmit={handleRegister} className="space-y-12">
        <div className="space-y-4">
          <div>
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm">Your name</label>
              <input
                type="name"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            {nameError && (
              <p className="text-red-600 text-xs mt-3">{nameError}</p>
            )}

            {/* Photo url */}
            <label className="block mb-2 text-sm mt-3">Photo URL</label>
            <input
              type="photo"
              name="photo"
              id="photo"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* password */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>

        <div className="space-y-2 mt-5">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-secondary dark:text-gray-50"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Have an account yet?
            <Link to="/auth/login" className="text-blue-600 underline">
              Login
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../ConText/AuthContext";

const Login = () => {


  const {loginSection} = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("")
  
  const location = useLocation();
  // console.log(location.state);


  const handleLogin = (e) => {
    e.preventDefault()
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);


    loginSection(email, password).then(result => {
      console.log(result); 
      // navigate(`${location.state? location.state : "/"}`)

      navigate(location?.state || '/')


    }).catch(error => {
      const errorCode = error.code;
      // const errorMessage = error.message
     setError(errorCode)
    })

  }







  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="my-3 text-2xl font-bold text-center p-2">
            Login your account
          </h1>

          <div className="card-body">
            <form onSubmit={handleLogin} >
              <label className="label">Email</label>
              <input name="email" type="email" className="input" required placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" required placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-600 text-xs text-center mt-5 ">{error}</p>}
            <button type="submit" className="btn w-full bg-secondary text-white mt-4">Login</button>
            </form>
            <div className="text-center">
              <span className="text-secondary">Don't Have an Account?</span>
              <Link to="/auth/register" className="text-primary underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";

function Login() {
    const {singIn,googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
     const from = location.state?.from?.pathname || '/';
     console.log ('here',from)

     const handleGoogle =()=>{
        googleLogIn()
        .then((result) => {
             const user = result.user;
             console.log(user);
             navigate(from);
    
        })
        .catch((error) => {
          console.log(error)
        })
    
      }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2 mr-12">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/20/23/43/keypad-454453_640.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                  <button onClick={handleGoogle} className="btn btn-warning btn-outline mt-4">
                    <FaGoogle />
                  </button>
                </div>
              </form>
              <p className="text-center my-4">
                New to Car-Doctor ?{" "}
                <Link to="/register" className="text-orange-600 font-bold">
                  Sing Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

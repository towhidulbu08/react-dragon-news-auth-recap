import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    console.log(navigate);
    console.log(location);
    const handleLogin=e=>{
        e.preventDefault();
        //console.log(e.currentTarget);
        const form= new FormData(e.currentTarget)
        const email=form.get('email');
        const password=form.get('password')
        signIn(email,password)
            .then(result=>{
                console.log(result.user);
                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error=>console.log(error))
        console.log(email,password);
    }
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:3/4 mx-auto bg-slate-200">
              <p className="text-3xl border-b-2 text-center">Login your account</p>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-black hover:bg-black text-white font-bold border-none">Login</button>
              </div>
              <p className="text-center mt-3">Don’t Have An Account ? <Link to="/register" className="text-red-600">Register</Link></p>
            </form>
     
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        //console.log(e.currentTarget);
        const form= new FormData(e.currentTarget)
        const email=form.get('email');
        const password=form.get('password')
        const name=form.get('name')
        const photo=form.get('photo')
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error))
        
        console.log(email,password,name,photo);
    }
    return (
        <div>
            <Navbar></Navbar>
              <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:3/4 mx-auto bg-slate-200">
              <p className="text-3xl border-b-2 text-center">Register your account</p>
              
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
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
                <button className="btn btn-primary bg-black hover:bg-black text-white font-bold border-none">Register</button>
              </div>
              <p className="text-center mt-3">Already Have An Account ? <Link to="/login" className="text-red-600">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
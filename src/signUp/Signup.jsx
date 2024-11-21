import React from "react";
import "./signup.css";
import { Link } from 'react-router-dom';


export const Signup = () => {
  return (
    <div className="addUser">
      <h3>Create an Account</h3>
      <form className="addUserForm">
        <div className="inputGroup">
              <div className="form-floating">
              <input
                type="text" className="form-control"
                autoComplete="off" id="floatingInput"
                placeholder=" "
              />
              <label htmlFor="name floatingInput" className="mb-2">Name*</label>
              </div>

              <div className="form-floating mt-2">
              <input
                type="Email" className="form-control"
                autoComplete="off" id="floatingInput"
                placeholder="Enter Email here"
              />
              <label htmlFor="Email floatingInput" className="mb-2">Email*</label>
              </div>

              <div className="form-floating mt-2">
              <input
                type="password" className="form-control"
                autoComplete="off" id="floatingInput"
                placeholder="Enter Password here"
              />
              <label htmlFor="password floatingInput" className="mb-2">Password*</label>
              </div>

              <button type="submit" className="btn btn-danger">Sign Up</button>
            </div>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login" type="submit" className="btn btn-success">Login</Link>
      </div>
    </div>
  );
};
export default Signup;
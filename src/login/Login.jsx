import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', { email, password })
  .then(res => console.log(res))
  .catch(err => console.log(err));
  }
  return (
    <div className="addUser">
      <h3>Welcome back</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
              
              <div className="form-floating mt-2">
              <input
                type="Email" className="form-control"
                autoComplete="off" id="floatingInput"
                placeholder=" " onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="Email floatingInput" className="mb-2">Email*</label>
              </div>

              <div className="form-floating mt-2">
              <input
                type="password" className="form-control"
                autoComplete="off" id="floatingInput"
                placeholder="  " onChange={e => setPassword(e.target.value)}
              />
              <label htmlFor="password floatingInput" className="mb-2">Password*</label>
              </div>

              <button type="submit" className="btn btn-danger">Log In</button>
            </div>
      </form>
      <div className="login">
        <p>Don't have an account?</p>
        <Link to="/" type="submit" className="btn btn-success">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
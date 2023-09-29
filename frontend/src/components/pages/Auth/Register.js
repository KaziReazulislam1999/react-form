import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container w-50 my-5">
      <h1 className="text-center">Register</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            First Name
          </label>
          <input
            type="fName"
            className="form-control"
            id="fName"
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lName" className="form-label">
            Last Name
          </label>
          <input
            type="lName"
            className="form-control"
            id="lName"
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="d-grid gap-2 my-5">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
      <div className="text-center">
        <p>Already have account!</p>
        <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (receiveData) => {
    const { fName, lName, email, password } = receiveData;

    const data = {
      fName,
      lName,
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${"http://localhost:8000/api/"}register`,
        data
      );
      if (res.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-50 my-5">
      <h1 className="text-center">Register</h1>

      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            First Name
          </label>
          <input
            type="fName"
            className="form-control"
            id="fName"
            placeholder="Enter your first name"
            name="fName"
            {...register("fName", { required: "First name is required!" })}
          />
          {errors.fName && (
            <p className="text-danger my-2">{errors.fName.message}</p>
          )}
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
            name="lName"
            {...register("lName", { required: "Last name is required!" })}
          />
          {errors.lName && (
            <p className="text-danger my-2">{errors.lName.message}</p>
          )}
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
            name="email"
            {...register("email", { required: "Email is required!" })}
          />
          {errors.email && (
            <p className="text-danger my-2">{errors.email.message}</p>
          )}
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
            name="password"
            {...register("password", { required: "Password is required!" })}
          />
          {errors.password && (
            <p className="text-danger my-2">{errors.password.message}</p>
          )}
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

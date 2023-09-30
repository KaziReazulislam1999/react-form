import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (receiveData) => {
    const { email, password } = receiveData;

    const data = {
      email,
      password,
    };

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}login`,
        data
      );

      if (res.status === 200) {
        setSuccess(res.data.message);
        setLoading(false);
        reset();
      }

      if (res.status === 404) {
        setNotFound(res.data.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="container w-50 my-5">
      <h1 className="text-center">Login</h1>

      <div className="d-flex justify-content-center my-4">
        {loading && <BeatLoader color="#36d7b7" loading />}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}
        {notFound && <p className="text-danger">{notFound}</p>}
      </div>

      <form onSubmit={handleSubmit(handleLogin)}>
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
        <p>Don't have an account!</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Register;

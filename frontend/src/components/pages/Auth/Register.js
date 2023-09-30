import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector } from "react-redux";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

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
      setLoading(true);
      setSuccess("");
      setError("");

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}register`,
        data
      );
      if (res.status === 200) {
        setSuccess(res.data.message);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container w-50 my-5">
      <h1 className="text-center">Register</h1>

      <div className="d-flex justify-content-center my-4">
        {loading && <BeatLoader color="#36d7b7" loading />}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}
      </div>

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

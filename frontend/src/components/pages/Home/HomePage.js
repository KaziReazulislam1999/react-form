import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove("user");
    dispatch({ type: "LOGOUT", payload: "null" });
  };

  return (
    <div className="container text-center my-4">
      <h2>Home</h2>
      <p className="text-capitalize">
        Welcome {user?.name ? user.name : "Guest"}
      </p>

      {user?.token ? (
        <button className="btn btn-danger" onClick={logOut}>
          LogOut
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default HomePage;

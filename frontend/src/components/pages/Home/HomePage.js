import React from "react";

const HomePage = () => {
  return (
    <div className="container text-center my-4">
      <h2>Home</h2>
      <p>Welcome Guest</p>

      <button className="btn btn-danger">LogOut</button>
      <button className="btn btn-success">Login</button>
    </div>
  );
};

export default HomePage;

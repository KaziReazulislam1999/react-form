import React from "react";
import { Routes, Route } from "react-router";
import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";
import HomePage from "./components/pages/Home/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;

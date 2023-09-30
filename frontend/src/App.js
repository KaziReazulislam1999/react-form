import React from "react";
import { Routes, Route } from "react-router";
import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

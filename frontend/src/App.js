import React from "react";
import { Routes, Route } from "react-router";
import Register from "./components/pages/Auth/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayoute from "./layoutes/MainLayoute";
import Dashboard from "./pages/Dashboard/Index";
import Login from "./pages/Login/Index";
import Register from "./pages/Register/Register";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/users/new" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default App;

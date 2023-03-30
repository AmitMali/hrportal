import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import DashboardLayoute from "./layoutes/DashboardLayoute";
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
        <Route path="/dashboard" element={<DashboardLayoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
};

export default App;

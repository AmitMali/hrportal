import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import DashboardLayoute from "./layoutes/DashboardLayoute";
import MainLayoute from "./layoutes/MainLayoute";
import Dashboard from "./pages/Dashboard/Index";
import Login from "./pages/Login/Index";
import Register from "./pages/Register/Register";
import {
  AdminRoutes,
  EmployeeRoutes,
  HrRoutes,
  ManagerRoutes,
} from "./auth/ProtectedRoutes/ProtectedRoutes";
import Logout from "./pages/Logout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/users/new"
            element={
              <AdminRoutes>
                <Register />
              </AdminRoutes>
            }
          />
        </Route>
        <Route path="/dashboard" element={<DashboardLayoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;

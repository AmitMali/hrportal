import React from "react";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import "./index.css";
import { loggedInUser } from "../../auth/authFunctions";
import HrDashboard from "./HrDashboard/HrDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ManagerDashboard from "./ManagerDashBoard/ManagerDashboard";

const Dashboard = () => {
  const user = loggedInUser();
  const role = user.role;
  if (role === "employee") {
    return <EmployeeDashboard user={user} />;
  } else if (role === "hr") {
    return <HrDashboard user={user} />;
  } else if (role === "admin") {
    return <AdminDashboard user={user} />;
  } else if (role === "manager") {
    return <ManagerDashboard user={user} />;
  }
};

export default Dashboard;

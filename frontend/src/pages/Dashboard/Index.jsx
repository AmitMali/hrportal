import { Layout, theme } from "antd";
import React from "react";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import "./index.css";
import { loggedInUser } from "../../auth/authFunctions";
import HrDashboard from "./EmployeeDashboard/HrDashboard";
import AdminDashboard from "./EmployeeDashboard/AdminDashboard";
import ManagerDashboard from "./EmployeeDashboard/ManagerDashboard";

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const user = loggedInUser();
  // console.log(user);
  const userDashboard = "";
  const role = "employee";
  if (role == "employee") {
    return <EmployeeDashboard user={user} />;
  } else if (role == "hr") {
    return <HrDashboard user={user} />;
  } else if (role == "admin") {
    <AdminDashboard user={user} />;
  } else if (role == "manager") {
    <ManagerDashboard user={user} />;
  }
};

export default Dashboard;

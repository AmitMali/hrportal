import React from "react";
import { isLoggedIn, loggedInUser } from "../authFunctions";
const EmployeeRoutes = ({ children }) => {
  const user = loggedInUser();
  if (isLoggedIn && user.role == "employee") return <div>{children}</div>;
};

export default EmployeeRoutes;

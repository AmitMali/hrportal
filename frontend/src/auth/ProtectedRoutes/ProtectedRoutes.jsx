import React from "react";
import { decrypt } from "../../helpers/encryptDecrypt";
import { isLoggedIn } from "../authFunctions";
const role = decrypt(localStorage.getItem("role"));
const AdminRoutes = ({ children }) => {
  if (isLoggedIn && ["admin", "hr", "manager", "employee"].includes(role))
    return <div>{children}</div>;
  else return <>unauthoriesd</>;
};
const EmployeeRoutes = ({ children }) => {
  const user = loggedInUser();
  if (isLoggedIn && ["employee"].includes(role)) return <div>{children}</div>;
};
const HrRoutes = ({ children }) => {
  const user = loggedInUser();
  if (isLoggedIn && ["hr"].includes(role)) return <div>{children}</div>;
};
const ManagerRoutes = ({ children }) => {
  const user = loggedInUser();
  if (isLoggedIn && ["manager"].includes(role)) return <div>{children}</div>;
};
export { AdminRoutes, EmployeeRoutes, HrRoutes, ManagerRoutes };

import React from "react";
import { decrypt } from "../../helpers/encryptDecrypt";
import { isLoggedIn } from "../authFunctions";
const role = decrypt(localStorage.getItem("role"));
const AdminRoutes = ({ children }) => {
  if (isLoggedIn && (role == "admin" || role == "employee"))
    return <div>{children}</div>;
  else return <>unauthoriesd</>;
};

export default AdminRoutes;

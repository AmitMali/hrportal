import { useJwt } from "react-jwt";
import Cookies from "universal-cookie";
import { decrypt } from "../helpers/encryptDecrypt";
const cookies = new Cookies();
// const token = cookies.get("token");
const token = localStorage.getItem("token");
const userId = localStorage.getItem("user");
const userRole = localStorage.getItem("role");

export const isLoggedIn = () => {
  if (token) {
    return true;
  }
  return false;
};

export const loggedInUser = () => {
  if (token) {
    return {
      id: decrypt(userId),
      role: decrypt(userRole),
    };
  }
  return false;
};

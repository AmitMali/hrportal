import { useJwt } from "react-jwt";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("token");
export const isLoggedIn = () => {
  if (token) {
    return true;
  }
  return false;
};

export const loggedInUser = () => {
  const { decodedToken, isExpired } = useJwt(token);

  if (token) {
    console.log(decodedToken);
    return decodedToken;
  }
  return false;
};

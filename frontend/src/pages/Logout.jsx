import { Navigate, useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Logout = () => {
  const navigate = useNavigate();
  cookies.remove("token");
  localStorage.removeItem("role");

  return <Navigate to="/" />;
};

export default Logout;

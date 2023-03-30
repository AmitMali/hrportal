import Cookies from "universal-cookie";

const cookie = new Cookies();
export default function authHeader() {
  const token = cookie.get("token");

  if (token) {
    // for Node.js Express back-end
    return { headers: { authorization: token } };
  } else {
    return {};
  }
}

import { isLoggedIn } from "../auth/authFunctions";
const Test = () => {
  console.log(isLoggedIn());
  return <>test</>;
};

export default Test;

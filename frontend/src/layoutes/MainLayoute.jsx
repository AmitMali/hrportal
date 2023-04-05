import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { isLoggedIn } from "../auth/authFunctions";
const { Header, Content, Footer } = Layout;
const menuitems = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: "home",
  },
  {
    label: isLoggedIn() ? (
      <a href="/logout" rel="noopener noreferrer">
        Logout
      </a>
    ) : (
      <a href="/login" rel="noopener noreferrer">
        Login
      </a>
    ),
    key: "loginout",
  },

  {
    label: (
      <a href="/users/new" rel="noopener noreferrer">
        Register
      </a>
    ),
    key: "register",
  },
  {
    label: isLoggedIn() ? (
      <a href="/dashboard" rel="noopener noreferrer">
        Dashboard
      </a>
    ) : (
      <></>
    ),
    key: "dashboard",
  },
];

const MainLayoute = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className="flex justify-between items-center">
        <div>
          <h3 className=" text-white ">LOGO</h3>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          items={menuitems}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
          height: "90vh",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};
export default MainLayoute;

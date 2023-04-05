import { Layout, Menu, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
const { Header, Content, Footer, Sider } = Layout;
const DashboardLayoute = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <SideBarMenu />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "16 0px",
            background: colorBgContainer,
          }}
        >
          Header
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Developed with love
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayoute;

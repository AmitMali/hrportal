import { Layout, theme, Col, Row, Card } from "antd";
import React from "react";
import PunchInOut from "../../Components/ui/PunchInOut";
import UserProfileCard from "../../Components/ui/UserProfileCard";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>
            <Card>
              <PunchInOut
                size={100}
                iconSize={40}
                userId={"64173e59734e02c684afb018"}
                titleLevel={5}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <UserProfileCard />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

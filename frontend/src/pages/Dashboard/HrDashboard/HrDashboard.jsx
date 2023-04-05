import { Col, Row, Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PunchInOut from "../../../Components/ui/PunchInOut";
import UserProfileCard from "../../../Components/ui/UserProfileCard";
// import "./index.css";
import authHeader from "../../../auth/authHeader";
import { Typography } from "antd";

const HrDashboard = (props) => {
  const { Title, Text } = Typography;

  const userid = props.user.id;
  const [user, setUser] = useState();
  const authHeaders = authHeader();
  const getUser = async () => {
    const resp = await axios.get(
      `http://localhost:3112/v1/users/${userid}`,
      authHeaders
    );

    setUser(await resp.data.user);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Row gutter={16}>
        <Col>
          <Text>
            hr dashboard
            {user && `Hello  ${user.first_name}  you logged in as ${user.role}`}
          </Text>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>
            <Card>
              {user && (
                <PunchInOut
                  size={100}
                  iconSize={40}
                  userId={user._id}
                  titleLevel={5}
                />
              )}
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>{user && <UserProfileCard user={user} />}</div>
        </Col>
      </Row>
    </>
  );
};

export default HrDashboard;

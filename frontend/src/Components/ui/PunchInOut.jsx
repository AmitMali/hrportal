import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Typography, Tooltip, Row, Col } from "antd";
import authHeader from "../../auth/authHeader";
const { Title } = Typography;
const PunchInOut = (props) => {
  const btnStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    fontSize: `${props.IconSize}px`,
  };
  const [status, setStatus] = useState("out");
  const isUserIn = async () => {
    try {
      const result = await axios.get(`users/timesheet`, authHeader());
      if (result.data.length !== 0) {
        setStatus("in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //punch in
  const punchIn = async () => {
    try {
      const result = await axios.post(
        "users/timesheet/punchin",
        {
          inTime: moment().toLocaleString(),
        },
        authHeader()
      );
      setStatus("in");
    } catch (error) {
      console.log(error);
    }
    console.log("punchin", status);
  };

  //punch out
  const punchOut = async () => {
    const result = await axios.patch(
      "users/timesheet/punchout",
      {
        outTime: moment().toLocaleString(),
      },
      authHeader()
    );
    setStatus("out");
    console.log("punchoute", status);
  };

  useEffect(() => {
    isUserIn();
  }, []);
  return !props.userId ? (
    console.error("user id is not exist for punch operation")
  ) : (
    <div>
      <Row gutter={[16, 16]} justify="center">
        <Col span={8} wrap className="m-3">
          <Tooltip title="Punch In">
            <Button
              style={btnStyle}
              //   size="large"
              type="primary"
              shape="circle"
              className=" bg-green-700"
              icon={<LoginOutlined />}
              onClick={punchIn}
              disabled={status == "out" ? false : true}
            />
          </Tooltip>
          <Title level={props.titleLevel ? props.titleLevel : 3}>
            Punch In
          </Title>
        </Col>
        <Col span={8} wrap className="m-3">
          <Tooltip title="Punch Out">
            <Button
              style={btnStyle}
              //   size="large"
              type="primary"
              shape="circle"
              className=" bg-red-700"
              icon={<LogoutOutlined />}
              disabled={status == "in" ? false : true}
              onClick={punchOut}
            />
            <Title level={props.titleLevel ? props.titleLevel : 3}>
              Punch Out
            </Title>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default PunchInOut;

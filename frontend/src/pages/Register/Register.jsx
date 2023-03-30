import { Card, theme, Col, Row } from "antd";
import RegisterForm from "../../Components/forms/RegisterForm";
import React from "react";
const Register = () => {
  return (
    <Row justify="center">
      <Col span={16}>
        <Card
          title="Register"
          className="RegisterFormCenter"
          style={{ marginTop: 30 }}
        >
          <RegisterForm />
        </Card>
      </Col>
    </Row>
  );
};
export default Register;

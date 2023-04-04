import { Card, Typography, Row, Col } from "antd";
const { Link, Text } = Typography;
import LoginForm from "../../forms/LoginForm";
const Login = () => {
  return (
    <Row justify="center">
      <Col span={16}>
        <Card
          title="Login"
          className="loginFormCenter"
          style={{ marginTop: 30 }}
        >
          <LoginForm />
          <Text className=" text-right block">
            Dont have account ?
            <Link href="/users/new" className="mx-1">
              Register
            </Link>
            here
          </Text>
        </Card>
      </Col>
    </Row>
  );
};
export default Login;

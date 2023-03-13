import {
  Card,
  Form,
  Layout,
  Menu,
  Space,
  theme,
  Col,
  Row,
  Typography,
} from "antd";
import LoginForm from "../../Components/LoginForm";
const { Header, Content, Footer } = Layout;
const Login = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <Typography>HR Portal</Typography>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          height: "90vh",
        }}
      >
        <Row justify="center">
          <Col span={16}>
            <Card
              title="Login"
              className="loginFormCenter"
              style={{ marginTop: 30 }}
            >
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default Login;

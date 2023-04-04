import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { encrypt } from "../helpers/encryptDecrypt";
const cookie = new Cookies();
const LoginForm = () => {
  const navigate = useNavigate();
  //TODO : failed login message display
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/users/auth/login", values);

      if (response && response.status == 200) {
        const role = encrypt(response.data.role);
        localStorage.setItem("role", role);
        cookie.set("token", response.data.token, { path: "/" });
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="userMail"
        rules={[
          {
            type: "email",
            message: "Enter Valid email",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="userPassword"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" size="large" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;

import { Card, Typography, Row, Col } from "antd";
const { Text, Title } = Typography;
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Row justify="center">
      <Col span={16}>
        <Card>
          <Title level={3}>HR Manager</Title>
        </Card>
      </Col>
    </Row>
  );
};
export default Home;

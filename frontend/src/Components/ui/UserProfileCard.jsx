import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;
const UserProfileCard = () => (
  <Card
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" size={142} />}
      title={<Title level={4}>Amit Mali</Title>}
      description={<p>some description will go here</p>}
    />
  </Card>
);
export default UserProfileCard;

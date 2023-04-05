import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const adminMenuItems = [
  getItem("Employee", "emp", <UserOutlined />, [
    getItem(<a href="">Create New Employee</a>, "1"),
    getItem(<a href="">View All Employee</a>, "2"),
    getItem(<a href="">Change Employee Password</a>, "3"),
    getItem(<a href="">Edit Employee</a>, "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
const SideBarMenu = () => {
  return <Menu mode="inline" theme="dark" items={adminMenuItems} />;
};
export default SideBarMenu;

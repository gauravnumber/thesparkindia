import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const LowBar = () => {
  return (
    <div>
      <Menu size="large" borderless fixed="bottom" fluid>
        <Menu.Item as={Link} to="/" name="home" active={true}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/categories">
          <Icon name="grid layout" />
          Categories
        </Menu.Item>
        <Menu.Item as={Link} to="/shop">
          <Icon name="shop" />
          Shop
        </Menu.Item>
        <Menu.Item as={Link} to="/feed">
          <Icon name="feed" />
          Feed
        </Menu.Item>
        <Menu.Item as={Link} to="/user">
          <Icon name="user" />
          Account
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LowBar;

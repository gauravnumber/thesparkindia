import { Link, NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const LowBar = () => {
  return (
    <div>
      <Menu size="large" borderless fixed="bottom" fluid>
        <Menu.Item as={Link} to="/" name="home" active={true}>
          <div className="center">
            <div>
              <Icon name="home" />
            </div>
            <div>Home</div>
          </div>
        </Menu.Item>
        <Menu.Item as={Link} to="/categories">
          <div className="center">
            <div>
              <Icon name="grid layout" />
            </div>
            <div>Categories</div>
          </div>
        </Menu.Item>
        <Menu.Item as={Link} to="/shop">
          <div className="center">
            <div>
              <Icon name="shop" />
            </div>
            <div>Shop</div>
          </div>
        </Menu.Item>
        <Menu.Item as={Link} to="/feed">
          <div className="center">
            <div>
              <Icon name="feed" />
            </div>
            <div>Feed</div>
          </div>
        </Menu.Item>
        <Menu.Item as={Link} to="/user">
          <div className="center">
            <div>
              <Icon name="user" />
            </div>
            <div>Account</div>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LowBar;

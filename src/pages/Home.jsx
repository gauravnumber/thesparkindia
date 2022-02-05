import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <Menu borderless>
        <Menu.Item>
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="user" /> <Icon name="shopping cart" />
        </Menu.Item>
        {/* <Menu.Menu>
          <Input icon="search" placeholder="Search for products" />
        </Menu.Menu> */}
      </Menu>
      <Input icon="search" placeholder="Search for products" fluid />
    </div>
  );
};

export default Home;

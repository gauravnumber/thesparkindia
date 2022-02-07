import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      {/* <Menu borderless>
        <Menu.Item>
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="user" /> <Icon name="shopping cart" />
        </Menu.Item>
      </Menu>
      <Input icon="search" placeholder="Search for products" fluid /> */}
    </div>
  );
};

export default Home;

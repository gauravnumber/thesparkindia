// import { Link, NavLink } from "react-router-dom";
// import { Icon, Menu } from "semantic-ui-react";
import { useState } from "react";

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const LowBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Categories" icon={<CategoryIcon />} />
        <BottomNavigationAction label="Feed" icon={<FeedOutlinedIcon />} />
        <BottomNavigationAction
          label="Message"
          icon={<MessageOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Me"
          icon={<AccountCircleOutlinedIcon />}
        />
        {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
      </BottomNavigation>
    </Paper>
    // <div>
    //   <Menu size="large" borderless fixed="bottom" fluid>
    //     <Menu.Item as={Link} to="/" name="home" active={true}>
    //       <div className="center">
    //         <div>
    //           <Icon name="home" />
    //         </div>
    //         <div>Home</div>
    //       </div>
    //     </Menu.Item>
    //     <Menu.Item as={Link} to="/categories">
    //       <div className="center">
    //         <div>
    //           <Icon name="grid layout" />
    //         </div>
    //         <div>Categories</div>
    //       </div>
    //     </Menu.Item>
    //     <Menu.Item as={Link} to="/shop">
    //       <div className="center">
    //         <div>
    //           <Icon name="shop" />
    //         </div>
    //         <div>Shop</div>
    //       </div>
    //     </Menu.Item>
    //     <Menu.Item as={Link} to="/feed">
    //       <div className="center">
    //         <div>
    //           <Icon name="feed" />
    //         </div>
    //         <div>Feed</div>
    //       </div>
    //     </Menu.Item>
    //     <Menu.Item as={Link} to="/user">
    //       <div className="center">
    //         <div>
    //           <Icon name="user" />
    //         </div>
    //         <div>Account</div>
    //       </div>
    //     </Menu.Item>
    //   </Menu>
    // </div>
  );
};

export default LowBar;

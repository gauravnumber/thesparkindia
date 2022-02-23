import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
// import { Icon, Menu } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LowBar = () => {
  // const [currentPath, setCurrentPath] = useState(location.pathname);
  const [value, setValue] = useState(0);
  const location = useLocation();

  const lowBarInfo = [
    {
      name: "Home",
      icon: <HomeOutlinedIcon />,
      path: "/",
    },
    {
      name: "Categories",
      icon: <CategoryIcon />,
    },
    { name: "Feed", icon: <FeedOutlinedIcon /> },
    {
      name: "Message",
      icon: <MessageOutlinedIcon />,
    },
    {
      name: "Me",
      icon: <AccountCircleOutlinedIcon />,
      path: "/user",
    },
  ];

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        // console.log("0");
        setValue(0);
        break;
      case "/user":
        setValue(4);
        // console.log("4");
        break;
      default:
        setValue(0);
      // console.log("none");
    }

    // console.log(`window.location.path`, window.location.path);
    // setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        // value={4}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // sx={{ px: 0 }}
      >
        {lowBarInfo.map((menu, index) => (
          <BottomNavigationAction
            key={index + menu.name}
            label={menu.name}
            icon={menu.icon}
            component={Link}
            to={menu.path ? menu.path : "/"}
            sx={{ px: 0, minWidth: 2 }}
          />
        ))}
        {/* <BottomNavigationAction
          label="Home"
          icon={<HomeOutlinedIcon />}
          component={Link}
          to="/"
          sx={{ px: 0, minWidth: 2 }}
        />
        <BottomNavigationAction
          label="Categories"
          icon={<CategoryIcon />}
          sx={{ px: 0, minWidth: 2 }}
        />
        <BottomNavigationAction
          label="Feed"
          icon={<FeedOutlinedIcon />}
          sx={{ px: 0 }}
        />
        <BottomNavigationAction
          label="Message"
          icon={<MessageOutlinedIcon />}
          sx={{ px: 0 }}
        />
        <BottomNavigationAction
          component={Link}
          to="/user"
          label="Me"
          icon={<AccountCircleOutlinedIcon />}
          sx={{ px: 0 }}
        /> */}
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

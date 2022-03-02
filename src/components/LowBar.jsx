import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LowBar = () => {
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
      path: "/categories",
    },
    { name: "Feed", icon: <FeedOutlinedIcon /> },
    {
      name: "Enquiry",
      icon: <MessageOutlinedIcon />,
      path: "/enquiry",
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
        setValue(0);
        break;
      case "/categories":
        setValue(1);
        break;
      case "/enquiry":
        setValue(3);
        break;
      case "/user":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

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
      </BottomNavigation>
    </Paper>
  );
};

export default LowBar;

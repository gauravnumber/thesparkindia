import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu as MenuIcon,
  Notifications,
  QrCode,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  styled,
} from "@mui/material";

import Drawer from "./Drawer";

const AppBarHeaderAndDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          height: 40,
          // boxShadow: (theme) => theme.shadows[1],
          "& .MuiToolbar-root": {
            minHeight: 40,
          },
          boxShadow: "unset",
          backgroundColor: "primary.blue2",
          color: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            SPARK INDIA
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <>
            <IconButton
              color="inherit"
              size="large"
              component={Link}
              to="/scan-and-buy"
            >
              <QrCode />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              component={Link}
              to="/notification"
            >
              <Notifications />
            </IconButton>
          </>
          <IconButton
            color="inherit"
            size="large"
            component={Link}
            to="/my-cart"
          >
            <ShoppingCartOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default AppBarHeaderAndDrawer;

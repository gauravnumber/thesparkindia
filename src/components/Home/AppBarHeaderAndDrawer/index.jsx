import { useState } from "react";
import { Link } from "react-router-dom";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import {
  Menu as MenuIcon,
  Notifications,
  QrCode,
  ShoppingCartOutlined,
  Close,
  Settings,
} from "@mui/icons-material";

import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Drawer,
  Divider,
  styled,
} from "@mui/material";

const drawerWidth = 240;

const AppBarHeaderAndDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerClose}
          // edge="start"
          // sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <Close />
        </IconButton>
        <Box
          sx={{
            width: drawerWidth,
            // height: 802,
            left: 0,
            top: 42,
          }}
        >
          <Box
            sx={{
              width: drawerWidth,
              height: 124,
              left: 0,
              top: 0,
              bgcolor: "#2847A1",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                position: "absolute",
                width: 43,
                height: 20,
                left: 21,
                top: 11,
              }}
            >
              Hello!
            </Typography>
            <IconButton sx={{ left: 196, top: 3 }}>
              <Settings />
            </IconButton>
            <AccountCircleRoundedIcon
              fontSize="large"
              color="action"
              sx={{
                position: "absolute",
                width: 56.57,
                height: 56.57,
                left: 17.71,
                top: 42.71,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                width: 55,
                height: 22,
                left: 96,
                top: 46,
                color: "#FFFFFF",
              }}
            >
              Junaid
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                width: 101,
                height: 16,
                left: 96,
                top: 73.18,
                color: "#FFFFFF",
              }}
            >
              +919568923556
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <HomeRoundedIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Home
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <CategoryRoundedIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Category
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <VideoLibraryIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Studio
            </Typography>
          </Box>
          <Divider />

          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <CropFreeIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              My profile
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <LocalShippingIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              My orders
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <HomeRoundedIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Ship with spark
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <CategoryRoundedIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Scan and pay
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <VideoLibraryIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Refer and pay
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: drawerWidth,
              height: 48,
              left: 0,
            }}
          >
            <CropFreeIcon
              color="action"
              sx={{
                m: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 50,
                top: 0,
                m: 2,
              }}
            >
              Credits and Wallet
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AppBarHeaderAndDrawer;

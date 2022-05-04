import { Link } from "react-router-dom";
// import { useState } from "react";

import { Box, Typography, IconButton, Drawer, Divider } from "@mui/material";
import { Close, Settings } from "@mui/icons-material";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const drawerWidth = 240;

const DrawerWrapper = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
    // setState({ ...state, [anchor]: open });
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        // variant="temporary"
        anchor="left"
        open={open}
        onClick={handleDrawerClose}
        // onClick={toggleDrawer(false)}
        // onKeyDown={toggleDrawer(false)}
        // disableSwipeToOpen={true}
        // ModalProps={{
        //   keepMounted: true,
        // }}
      >
        {/* <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerClose}
          // edge="start"
          // sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <Close />
        </IconButton> */}
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
            <IconButton
              sx={{ left: 196, top: 3 }}
              component={Link}
              to="/account-settings"
            >
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
              component={Link}
              to="/categories"
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
              component={Link}
              to="/my-orders"
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
              component={Link}
              to="/scan-and-buy"
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
              component={Link}
              to="/refer"
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

export default DrawerWrapper;

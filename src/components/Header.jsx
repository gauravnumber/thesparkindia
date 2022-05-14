import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useHeader from "@/hooks/useHeader";
import {
  ArrowBack,
  Notifications,
  QrCode,
  Settings,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Toolbar from "@mui/material/Toolbar";
import {
  styled,
  AppBar,
  Box,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";

const drawerWidth = 240;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { heading } = useHeader();

  if (["/scan-and-buy", "/", "/intro"].includes(location.pathname)) return null;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          color: "primary.blue",
          backgroundColor: (theme) => theme.palette.background.paper,
          height: 40,
          boxShadow: (theme) => theme.shadows[1],
          "& .MuiToolbar-root": {
            minHeight: 40,
          },
          ...(location.pathname === "/" && {
            boxShadow: "unset",
            backgroundColor: "primary.blue2",
            color: "#fff",
          }),
        }}
      >
        <Toolbar>
          {location.pathname === "/" ? (
            <IconButton color="inherit" edge="start">
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => navigate(-1)}
              edge="start"
            >
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            {heading}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {location.pathname === "/" && (
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
          )}
          <IconButton
            color="inherit"
            size="large"
            component={Link}
            to="/my-cart"
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          {location.pathname === "/user" && (
            <IconButton
              color="inherit"
              size="large"
              component={Link}
              to="/account-settings"
            >
              <Settings />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer>drawer</Drawer>
    </div>
  );
};

export default Header;

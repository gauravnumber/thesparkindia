import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import {
  QrCode,
  Notifications,
  Settings,
  ArrowBack,
} from "@mui/icons-material";

import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Typography, IconButton, Box, AppBar } from "@mui/material";
// import { ArrowBack } from "@mui/icons-material";

import useHeader from "@/hooks/useHeader";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { heading } = useHeader();

  if (location.pathname === "/scan-and-buy") return null;

  return (
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
          <IconButton color="inherit" onClick={() => navigate(-1)} edge="start">
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
        <IconButton color="inherit" size="large" component={Link} to="/my-cart">
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
  );
};

export default Header;

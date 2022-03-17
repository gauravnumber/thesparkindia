import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Typography, IconButton, Box, AppBar } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import useHeader from "@/hooks/useHeader";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { heading } = useHeader();

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
      }}
    >
      <Toolbar
      // disableGutters
      >
        {location.pathname !== "/" && (
          <IconButton color="inherit" onClick={() => navigate(-1)} edge="start">
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {heading}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" size="large">
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton color="inherit" size="large">
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

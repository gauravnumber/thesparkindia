import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Typography, IconButton, Box, styled } from "@mui/material";

const Header = () => {
  const AppBar = styled(MuiAppBar, {
    // shouldForwardProp: (prop) => prop !== "open",
  })(
    ({
      theme,
      // , open
    }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      // ...(open && {
      //   // marginLeft: drawerWidth,
      //   // width: `calc(100% - ${drawerWidth}px)`,
      //   transition: theme.transitions.create(["width", "margin"], {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.enteringScreen,
      //   }),
      // }),
    })
  );

  return (
    <>
      <AppBar
        position="fixed"
        //  open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SPARK INDIA
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
    </>
  );
};

export default Header;

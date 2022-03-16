// import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
  Typography,
  IconButton,
  Box,
  AppBar,
  //  styled
} from "@mui/material";

const Header = () => {
  // "npm run lint:fix",

  // const AppBar = styled(MuiAppBar, {
  //   // shouldForwardProp: (prop) => prop !== "open",
  // })(
  //   ({
  //     theme,
  //     // , open
  //   }) => ({
  //     // "& .MuiAppBar-root": {
  //     //   // color: "text.primary",
  //     //   color: "red",
  //     //   backgroundColor: (theme) => theme.palette.background.paper,
  //     //   height: 40,
  //     // },

  //     // "& .MuiToolbar-root": {
  //     //   minHeight: 40,
  //     // },

  //     zIndex: theme.zIndex.drawer + 1,
  //     transition: theme.transitions.create(["width", "margin"], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen,
  //     }),
  //     // marginBottom: 50,
  //     // ...(open && {
  //     //   // marginLeft: drawerWidth,
  //     //   // width: `calc(100% - ${drawerWidth}px)`,
  //     //   transition: theme.transitions.create(["width", "margin"], {
  //     //     easing: theme.transitions.easing.sharp,
  //     //     duration: theme.transitions.duration.enteringScreen,
  //     //   }),
  //     // }),
  //   }),
  // );

  return (
    <AppBar
      position="fixed"
      sx={{
        // color: "red",
        color: "primary.blue",
        backgroundColor: (theme) => theme.palette.background.paper,
        height: 40,
        boxShadow: (theme) => theme.shadows[1],

        "& .MuiToolbar-root": {
          minHeight: 40,
        },
      }}
      //  open={open}
    >
      <Toolbar
      // disableGutters
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // onClick={handleDrawerOpen}
          edge="start"
          // sx={{
          //   marginRight: "36px",
          //   ...(open && { display: "none" }),
          // }}
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
  );
};

export default Header;

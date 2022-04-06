import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import {
  // createTheme,
  GlobalStyles,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Edit } from "@mui/icons-material";

function User() {
  const menu = [
    {
      name: "My Orders",
      icon: <LibraryAddCheckOutlinedIcon />,
      path: "/my-orders",
    },
    {
      name: "Recently Viewed",
      icon: <AccessTimeOutlinedIcon />,
      path: "/recently-viewed",
    },
    {
      name: "Favourites",
      icon: <FavoriteBorderOutlinedIcon />,
      path: "/favourites",
    },
    {
      name: "My Coupon",
      icon: <LocalOfferOutlinedIcon />,
    },
  ];

  return (
    <
      // ThemeProvider theme={theme}
    >
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Grid
        container
        direction="column"
        pt={10}
        mt={-10}
        // ml={-2}
        // mr={-2}
        // px={2}
        // mx={-2}
        // sx={{
        //   "& .MuiContainer-root": {
        //     backgroundColor: "green",
        //   },
        // }}
        backgroundColor={(theme) => theme.palette.background.paper}
        // backgroundColor="red"
        // backgroundColor="background.paper"
      >
        <Grid item container direction="column" spacing={1} mb={2}>
          <Grid item container xs justifyContent="center" alignItems="center">
            <Grid item xs>
              <IconButton size="large">
                <Avatar
                  //  src="/broken-image.jpg"
                  sx={{ width: 90, height: 90 }}
                />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                // backgroundColor="red"
              >
                <Typography variant="h4" textAlign="center">
                  <Box>00</Box>{" "}
                  <Typography variant="body1">Followers</Typography>
                </Typography>
                <Typography variant="h4" textAlign="center">
                  <Box>00</Box>{" "}
                  <Typography variant="body1">Following</Typography>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid item container spacing={3} xs justifyContent="flex-end">
            <Grid item>
              <Button variant="contained" sx={{ borderRadius: "15px" }}>
                Sign up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ borderRadius: "15px" }}>
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-end" sx={{ m: 0, p: 0 }}>
            <IconButton
              component={Link}
              to="/edit-profile"
              //  LinkComponent="/edit-profile"
            >
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
        <Grid item my={3}>
          <BottomNavigation
            showLabels
            sx={{
              lineHeight: 1,
              backgroundColor: (theme) => theme.palette.background.paper,
            }}
            // sx={{
            //   "&.MuiBottomNavigationAction-label": {
            //     fontSize: "11px",
            //   },
            // }}
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          >
            {menu.map((item) => (
              <BottomNavigationAction
                key={item.name + item.path}
                // sx={{
                //   padding: 0,
                //   // fontSize: "11px",
                // }}
                sx={{
                  padding: 0,
                  "&.MuiButtonBase-root .MuiBottomNavigationAction-label": {
                    fontSize: (theme) => theme.typography.pxToRem(11),
                    marginTop: 1,
                    // lineHeight: 1,
                  },
                  // "&.MuiButtonBase-root .MuiBottomNavigationAction-label": {
                  //   lineHeight: 1,
                  // },
                }}
                label={item.name}
                component={Link}
                to={item.path ? item.path : "/"}
                icon={
                  // item.icon
                  <Paper
                    elevation={5}
                    sx={{
                      p: 2,
                      borderRadius: "50%",
                    }}
                  >
                    {item.icon}
                  </Paper>
                }
              />
            ))}
          </BottomNavigation>
        </Grid>
        <Divider />
        <Grid item>
          <ListItemButton component="a">
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sellers"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component="a">
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="How to sell"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component="a">
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Language"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component="a">
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Help Center"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component="a">
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="About Spark India"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
        </Grid>
      </Grid>
    </
      // ThemeProvider
    >
  );
}

export default User;

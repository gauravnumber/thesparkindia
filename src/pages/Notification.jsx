import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import { alpha, Box, Divider, Typography, Stack, Grid } from "@mui/material";

const Notification = () => {
  const [checked, setChecked] = React.useState([
    "notifications",
    "orderUpdates",
    "latestUpdates",
    "email",
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const notifications = [
    // {
    //   id: 1,
    //   name: "Notifications",
    //   uniqueName: "notifications",
    // },

    {
      id: 2,
      name: "Order Updates",
      uniqueName: "orderUpdates",
    },
    {
      id: 3,
      name: "Latest Updates",
      uniqueName: "latestUpdates",
    },
    {
      id: 4,
      name: "Special Offers",
      uniqueName: "specialOffers",
    },
  ];

  return (
    <Box
      sx={
        {
          // display: "flex",
          // justifyContent: "center",
          // borderRadius: "12px",
          // backgroundColor: "red",
        }
      }
    >
      <List
        sx={{
          borderRadius: "12px",
          // backgroundColor: "green",
          // backgroundColor: "text.secondary",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          mb: 3,
        }}
      >
        <ListItem>
          <ListItemText primary="Notifications" />
          <Switch
            edge="end"
            onChange={handleToggle("notifications")}
            checked={checked.indexOf("notifications") !== -1}
          />
        </ListItem>
      </List>
      <List
        sx={{
          borderRadius: "12px",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          // backgroundColor: "text.secondary",
          // backgroundColor: "red",
          // width: "100%",
          // maxWidth: 360,
          // bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <Grid
            container
            // justifyContent="center"
            // alignItems="center"
            // sx={{ maxWidth: "100%", flexGrow: 1 }}
            // direction="row"
            // divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <Grid
              item
              container
              xs
              justifyContent="space-around"
              alignItems="center"
              // sx={{
              //   display: "flex",

              //   justifyContent: "space-between",
              //   alignItems: "center",
              //   // width: 150,
              // }}
            >
              <Typography>Mobile</Typography>
              <Switch
                edge="end"
                onChange={handleToggle("mobile")}
                checked={checked.indexOf("mobile") !== -1}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="space-around"
              alignItems="center"
              xs
              // sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography>Email</Typography>
              <Switch
                edge="end"
                onChange={handleToggle("email")}
                checked={checked.indexOf("email") !== -1}
              />
            </Grid>
          </Grid>
          {/* <Box
            sx={{
              mx: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <Typography variant="subtitle1">Mobile</Typography>
            <Switch
              edge="end"
              onChange={handleToggle("mobile")}
              checked={checked.indexOf("mobile") !== -1}
            />

            <Divider orientation="vertical" flexItem />
            <Typography variant="subtitle1">Email</Typography>
            <Switch
              edge="end"
              onChange={handleToggle("email")}
              checked={checked.indexOf("email") !== -1}
            />
          </Box> */}
        </ListItem>
        {/* <ListItem>
        </ListItem> */}
        {notifications.map((notification) => (
          <ListItem key={notification.id}>
            <ListItemText
              // id="switch-list-label-notifications"
              primary={notification.name}
            />
            <Switch
              edge="end"
              onChange={handleToggle(notification.uniqueName)}
              checked={checked.indexOf(notification.uniqueName) !== -1}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notification;

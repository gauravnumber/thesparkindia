import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import { Box } from "@mui/material";

const Notification = () => {
  const [checked, setChecked] = React.useState([
    "notifications",
    "orderUpdates",
    "latestUpdates",
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
          backgroundColor: "green",
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
          backgroundColor: "red",
          // width: "100%",
          // maxWidth: 360,
          // bgcolor: "background.paper",
        }}
      >
        {notifications.map((notification) => (
          <ListItem key={notification.id}>
            <ListItemText
              id="switch-list-label-notifications"
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

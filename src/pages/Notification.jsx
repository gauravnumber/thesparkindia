import { Box, Stack, Typography, Button } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Notifications() {
  return (
    <div className="App">
      <Box
        sx={{
          bgColor: "#E5E5E5",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bgcolor: "#FFFFFF",
            width: 1,
            top: 0,
          }}
        >
          <Stack
            direction="row"
            spacing={15}
            sx={{
              mt: 10,
              ml: 5,
            }}
          >
            <NotificationsNoneOutlinedIcon fontSize="large" color="primary" />
            <DiscountOutlinedIcon fontSize="large" color="primary" />
            <ShoppingCartOutlinedIcon fontSize="large" color="primary" />
          </Stack>
          <Box
            sx={{
              position: "relative",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: 0.15,
              right: 15,
              ml: 5,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000000",
                mt: 2,
              }}
            >
              All
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000000",
                mt: 2,
                ml: 11,
              }}
            >
              Offers
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000000",
                mt: 2,
                ml: 11,
              }}
            >
              Orders
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            bgcolor: "#FFFFFF",
            position: "absolute",
            top: 170,
            width: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              m: 1,
            }}
          >
            Product Shipped
            <CheckCircleIcon
              color="primary"
              sx={{
                position: "relative",
                left: 10,
                top: 6,
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 11,
              width: 210,
              m: 1,
            }}
          >
            Your Package contains color led bulb has been shipped and will be
            delivered soon!
          </Typography>
          <Button
            variant="text"
            sx={{
              bgColor: "#F2F2F299",
              opacity: 0.6,
              fontWeight: 500,
              fontSize: 9,
              ml: 1,
            }}
          >
            Track your package
            <ArrowForwardIosIcon
              fontSize="small"
              sx={{
                ml: 2,
              }}
            />
          </Button>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 9,
              ml: 1,
            }}
          >
            5 minutes ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: 91,
            height: 92,
            position: "absolute",
            left: 307,
            top: 185,
          }}
        >
          <img
            src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2021/12/20211201-Hotel-marketing-trends.png"
            alt="light bulb"
            width="91px"
            height="92p"
          />
        </Box>
      </Box>
    </div>
  );
}

export default Notifications;

// import { alpha, Box, Grid, Typography } from "@mui/material";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Switch from "@mui/material/Switch";
// import * as React from "react";

// const Notification = () => {
//   const [checked, setChecked] = React.useState([
//     "notifications",
//     "orderUpdates",
//     "latestUpdates",
//     "email",
//   ]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const notifications = [
//     // {
//     //   id: 1,
//     //   name: "Notifications",
//     //   uniqueName: "notifications",
//     // },

//     {
//       id: 2,
//       name: "Order Updates",
//       uniqueName: "orderUpdates",
//     },
//     {
//       id: 3,
//       name: "Latest Updates",
//       uniqueName: "latestUpdates",
//     },
//     {
//       id: 4,
//       name: "Special Offers",
//       uniqueName: "specialOffers",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         pt: 2,
//         // display: "flex",
//         // justifyContent: "center",
//         // borderRadius: "12px",
//         // backgroundColor: "blue",
//       }}
//     >
//       <List
//         sx={{
//           borderRadius: "12px",
//           // backgroundColor: "green",
//           // backgroundColor: "text.secondary",
//           backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
//           mb: 3,
//         }}
//       >
//         <ListItem>
//           <ListItemText primary="Notifications" />
//           <Switch
//             edge="end"
//             onChange={handleToggle("notifications")}
//             checked={checked.indexOf("notifications") !== -1}
//           />
//         </ListItem>
//       </List>
//       <List
//         sx={{
//           borderRadius: "12px",
//           backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
//           // backgroundColor: "text.secondary",
//           // backgroundColor: "red",
//           // width: "100%",
//           // maxWidth: 360,
//           // bgcolor: "background.paper",
//         }}
//       >
//         <ListItem>
//           <Grid
//             container
//             // justifyContent="center"
//             // alignItems="center"
//             // sx={{ maxWidth: "100%", flexGrow: 1 }}
//             // direction="row"
//             // divider={<Divider orientation="vertical" flexItem />}
//             spacing={5}
//           >
//             <Grid
//               item
//               container
//               xs
//               justifyContent="space-around"
//               alignItems="center"
//               // sx={{
//               //   display: "flex",

//               //   justifyContent: "space-between",
//               //   alignItems: "center",
//               //   // width: 150,
//               // }}
//             >
//               <Typography>Mobile</Typography>
//               <Switch
//                 edge="end"
//                 onChange={handleToggle("mobile")}
//                 checked={checked.indexOf("mobile") !== -1}
//               />
//             </Grid>
//             <Grid
//               item
//               container
//               justifyContent="space-around"
//               alignItems="center"
//               xs
//             >
//               <Typography>Email</Typography>
//               <Switch
//                 edge="end"
//                 onChange={handleToggle("email")}
//                 checked={checked.indexOf("email") !== -1}
//               />
//             </Grid>
//           </Grid>
//         </ListItem>
//         {notifications.map((notification) => (
//           <ListItem key={notification.id}>
//             <ListItemText primary={notification.name} />
//             <Switch
//               edge="end"
//               onChange={handleToggle(notification.uniqueName)}
//               checked={checked.indexOf(notification.uniqueName) !== -1}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Notification;

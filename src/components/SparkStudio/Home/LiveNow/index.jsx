import Carousel from "react-material-ui-carousel";
import { TvOutlined } from "@mui/icons-material";
import {
  useTheme,
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

import Slide from "./Slide";
import TrendingShops from "./TrendingShops";

const CurrentLives = () => {
  const theme = useTheme();

  // const redColor = theme.palette.primary.liveRed;
  const blackColor = theme.palette.primary.lightBlack;
  const sparkBlue = theme.palette.primary.sparkBlue2;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <ListItem
        component="div"
        secondaryAction={
          <Typography sx={{ color: sparkBlue, fontSize: 12, fontWeight: 500 }}>
            See All
          </Typography>
        }
        sx={{
          mt: 1,
          "& .MuiListItemIcon-root": {
            minWidth: "33px",
          },
        }}
      >
        <ListItemIcon>
          <TvOutlined />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{ fontWeight: 500, fontSize: 16, color: blackColor }}
            >
              Live Now
            </Typography>
          }
        />
      </ListItem>
      <Carousel
        autoPlay={false}
        sx={{
          //  backgroundColor: "red",
          p: 0,
          m: 0,
        }}
      >
        {Array.from(Array(6)).map((item, index) => (
          <Slide key={index} />
        ))}
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit nihil at atque dignissimos amet totam beatae nisi
          fugiat?
        </p>
        <p>
          Fugiat necessitatibus dolores, exercitationem tempora porro esse
          molestiae cum temporibus quas sed.
        </p> */}
      </Carousel>
      <TrendingShops />
    </Box>
  );
};

export default CurrentLives;

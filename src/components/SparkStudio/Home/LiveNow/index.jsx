import { TvOutlined } from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Slide from "./Slide";

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
      </Carousel>
      {/* <TrendingShops /> */}
    </Box>
  );
};

export default CurrentLives;

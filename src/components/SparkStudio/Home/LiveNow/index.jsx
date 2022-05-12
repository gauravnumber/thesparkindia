import { useState } from "react";
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
import SwipeableViews from "react-swipeable-views";
import Slide from "./Slide";

const CurrentLives = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  // const redColor = theme.palette.primary.liveRed;
  const blackColor = theme.palette.primary.lightBlack;
  const sparkBlue = theme.palette.primary.sparkBlue2;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
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
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Array.from(Array(6)).map((_, index) => (
          <Box
            key={index}
            sx={{
              // width: 324,
              height: 190,
              mx: "18px",
              mb: "10px",
              borderRadius: "10px",
              background:
                "linear-gradient(180deg, rgba(182, 182, 182, 0.79) 0%, rgba(11, 11, 11, 0.65) 100%)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            nobis ullam facilis cupiditate eveniet rerum, eligendi doloremque
            rem quidem quae voluptas. Ipsam ea et quasi animi, id similique
            eligendi hic!
          </Box>
        ))}
      </SwipeableViews>
      {/* <Carousel
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
      </Carousel> */}
    </Box>
  );
};

export default CurrentLives;

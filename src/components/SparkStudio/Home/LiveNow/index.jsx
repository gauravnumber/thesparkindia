import { useState } from "react";
import { TvOutlined, Visibility } from "@mui/icons-material";
import {
  Stack,
  Avatar,
  IconButton,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Grid,
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
        // enableMouseEvents
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
              backgroundImage: `linear-gradient(180deg, rgba(182, 182, 182, 0.79) 0%, rgba(11, 11, 11, 0.65) 100%) , url(https://source.unsplash.com/324x190?sig=${index})`,
            }}
          >
            <Grid
              container
              sx={{
                height: "100%",
                p: "10px 10px",
              }}
              direction="column"
              justifyContent="space-between"
              // alignItems="flex-end"
            >
              <Grid
                item
                container
                direction="row"
                // xs={6}
                // alignItems="flex-start"
                // alignItems="flex-end"
                // alignItems="center"
                // justifyContent="flex-end"
              >
                <Grid item xs>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "primary.liveRed",
                      "&:before": {
                        content: '"["',
                        color: "#000",
                        pr: "4px",
                      },
                      "&:after": {
                        content: '"]"',
                        color: "#000",
                        pl: "4px",
                      },
                    }}
                  >
                    Live &bull;
                  </Typography>
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                  <Grid
                    item
                    container
                    // direction="row"
                    // spacing="2px"
                    alignItems="center"
                    justifyContent="inherit"
                  >
                    <IconButton
                      sx={{
                        p: 0,
                        // mr: "2px",
                        color: "#fff",
                        // width: 14,
                        // height: 10,
                        "& .MuiSvgIcon-root": {
                          width: 14,
                          height: 16,
                        },
                      }}
                    >
                      <Visibility />
                    </IconButton>
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#fff",
                      }}
                    >
                      15,000
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#fff",
                      }}
                    >
                      Watching
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                container
                // alignContent="flex-end"
                // justifySelf="flex-end"
                // justifyContent="flex-end"
                // alignItems="flex-end"
                // direction="column"
                // xs={6}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  // sx={{
                  //   mt: "10px",
                  //   ml: "8px",
                  // }}
                  spacing="7px"
                >
                  <Avatar
                    src="https://source.unsplash.com/29x29?social-media-user"
                    alt="user"
                    sx={{
                      width: 24,
                      height: 24,
                    }}
                  />
                  <Stack direction="column">
                    <Typography
                      sx={{ color: "#fff", fontSize: 11, fontWeight: 500 }}
                    >
                      Sindhu.pvt
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: 300,
                        color: "#fff",
                        // color: "primary.grey3",
                        width: 220,
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                      noWrap
                    >
                      Best Selling Electronic under 2000/- Best Selling
                      Electronics
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
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

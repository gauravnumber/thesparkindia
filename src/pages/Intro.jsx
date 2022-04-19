import Carousel from "react-material-ui-carousel";

import {
  useTheme,
  Button,
  Stack,
  Box,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Image } from "mui-image";

const Intro = () => {
  const theme = useTheme();
  // const items =[{

  // }]
  // return <Box mt={-5}>intro</Box>;

  return (
    <Box mt={-5} p={1} sx={{ position: "relative" }}>
      {/* <Button sx={{ float: "right", display: "block" }}>Skip</Button> */}
      {/* <br /> */}
      {/* <Button sx={{ position: "absolute", right: 0, top: 0, mb: 3 }}>
        Skip
      </Button> */}
      {/* <Avatar>
        <ArrowBack />
      </Avatar> */}
      <Stack direction="row" justifyContent="flex-end">
        <Button sx={{ color: "primary.darkBlue" }}>Skip</Button>
      </Stack>
      <Carousel
        // autoPlay={false}
        // indicatorIconButtonProps={{
        //   style: {
        //     // padding: "10px", // 1
        //     color: "blue", // 3
        //   },
        // }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.darkBlue, // 3

            // backgroundColor: "red", // 2
          },
        }}

        // navButtonsWrapperProps={{
        //   // Move the buttons to the bottom. Unsetting top here to override default style.
        //   style: {
        //     color: "blue",
        //     bottom: "0",
        //     backgroundColor: "green",
        //     top: "unset",
        //   },
        // }}
        // // fullHeightHover={false}
        // navButtonsProps={{
        //   // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        //   style: {
        //     backgroundColor: "green",
        //     color: "red",
        //     borderRadius: 0,
        //   },
        // }}
      >
        {Array.from(Array(3)).map((_, i) => (
          <Stack
            key={i}
            // sx={{ height: "500px" }}
            direction="column"
          >
            <Image
              src={`https://source.unsplash.com/200x250?sig=${i}`}
              alt="demo"
              height={250}
              // width="200"
              // variant="square"
              // sx={{
              //   //  width: "100%",
              //   height: "10px",
              // }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: (theme) => theme.typography.pxToRem(18),
                textAlign: "center",
                mt: 7,
                // mx: "34px",
              }}
            >
              One step destination of all buyers and seller's
            </Typography>
          </Stack>
          // <Slide key={i} item={item} />
        ))}
      </Carousel>

      <Button
        variant="contained"
        sx={{
          float: "right",
          minWidth: "45px",
          minHeight: "43px",
          backgroundColor: "primary.darkBlue",
        }}
      >
        <ArrowForward />
      </Button>
    </Box>
  );
};

export default Intro;

import Carousel from "react-material-ui-carousel";

import {
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
        <Button>Skip</Button>
      </Stack>
      <Carousel
      // autoPlay={false}
      //  indicators={false}
      >
        {Array.from(Array(3)).map((item, i) => (
          <Stack
            key={i}
            // sx={{ height: "500px" }}
            direction="column"
          >
            <Image
              src={`https://source.unsplash.com/200x250?sig=${i}`}
              // height="90"
              width="200"
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
        sx={{ float: "right", minWidth: "45px", minHeight: "43px" }}
      >
        <ArrowForward />
      </Button>
    </Box>
  );
};

export default Intro;

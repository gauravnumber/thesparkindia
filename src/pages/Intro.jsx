import { Link } from "react-router-dom";
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
// import { useState } from "react";

const Intro = () => {
  // const [index, setIndex] = useState(0);
  const theme = useTheme();

  return (
    <Box mt={-5} p={1}>
      <Stack direction="row" justifyContent="flex-end">
        <Button sx={{ color: "primary.darkBlue" }} component={Link} to="/">
          Skip
        </Button>
      </Stack>
      <Carousel
        autoPlay={false}
        // index={index}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.darkBlue,
          },
        }}
      >
        {Array.from(Array(3)).map((_, i) => (
          <Stack key={i} direction="column">
            <Image
              src={`https://source.unsplash.com/200x250?family&sig=${i}`}
              alt="demo"
              height={250}
              // showLoading
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: (theme) => theme.typography.pxToRem(18),
                textAlign: "center",
                mt: 7,
              }}
            >
              One step destination of all buyers and seller's
            </Typography>
          </Stack>
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
        // onClick={() => setIndex(index + 1)}
        // onClick={() => setIndex((prev) => prev + 1)}
      >
        <ArrowForward />
      </Button>
    </Box>
  );
};

export default Intro;

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

  return (
    <Box mt={-5} p={1}>
      <Stack direction="row" justifyContent="flex-end">
        <Button sx={{ color: "primary.darkBlue" }}>Skip</Button>
      </Stack>
      <Carousel
        // autoPlay={false}

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
      >
        <ArrowForward />
      </Button>
    </Box>
  );
};

export default Intro;

// import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";
// import Sidebar from "../components/Sidebar";
import { VoiceChat } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import {
  LinearProgress,
  Badge,
  Grid,
  Stack,
  GlobalStyles,
  Typography,
  Paper,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import Img from "@/components/Img";
import Slide from "@/components/Slide";
import Progress from "@/components/Progress";

import { Countdown, Dot } from "@/components/HotDeals";

const Home = () => {
  const theme = useTheme();

  var items = [
    {
      name: "Light Bulbs",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 45% OFF*",
      companyName: "Sindhu Pvt.",
    },
    {
      name: "Shoes",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 30% OFF*",
      companyName: "Mindhu Pvt.",
    },
    {
      name: "LED",
      description: "Get Best Deal with Best Quality and Quantity",
      buttonText: "UP TO 35% OFF*",
      companyName: "Bindhu Pvt.",
    },
    {
      name: "Phone",
      description: "Get Best Deal with Great Best Quality",
      buttonText: "UP TO 40% OFF*",
      companyName: "Aindhu Pvt.",
    },
    {
      name: "TV",
      description: "Get Best Deal with Big TV",
      buttonText: "UP TO 25% OFF*",
      companyName: "Rindhu Pvt.",
    },
  ];

  return (
    <Box
      //  mt={-5}
      mx={-1}
    >
      <GlobalStyles
        styles={{
          body: {
            // backgroundColor: "#223263",
            // backgroundColor: (theme) => theme.palette.primary.blue,
            // backgroundColor: "primary.blue",
          },
        }}
      />
      <TextField
        size="small"
        sx={{
          mt: 1,
          px: 1,
          borderRadius: "15px",
          bgcolor: "background.paper",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Img
        src="https://source.unsplash.com/393x67?advertisement,discount"
        sx={{ mt: 1, mb: -1 }}
        alt="Offers Banner"
      />
      <Carousel
        autoPlay={false}
        indicators={false}
        // indicatorIconButtonProps={{
        //   style: {
        //     // padding: "10px", // 1
        //     color: "blue", // 3
        //   },
        // }}
        // indicatorContainerProps={{
        //   style: {
        //     marginTop: -24, // 5
        //   },
        // }}
        // IndicatorIcon={<Home/>} // Previous Example
        // activeIndicatorIconButtonProps={{
        //   style: {
        //     backgroundColor: "red", // 2
        //   },
        // }}
      >
        {items.map((item, i) => (
          <Slide key={i} item={item} />
        ))}
      </Carousel>

      <Paper
        sx={{
          mt: 1,
          mx: 1,
          p: 1,
          //  pb: 3
        }}
      >
        <Typography variant="h6" color="primary.blue2">
          SPARKS
        </Typography>
        <Grid
          container
          // alignItems="center"
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              key={index}
              // spacing={1}
              // rowSpacing={2}
              xs={3}
              // component="button"
            >
              <IconButton
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 37.04,
                  },
                }}
              >
                <VoiceChat />
              </IconButton>
              <Typography
                sx={{
                  width: 57,
                  // height: 26,
                  fontSize: (theme) => theme.typography.pxToRem(12),
                  textAlign: "center",
                }}
              >
                Scan and Buy
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* <Img
            src="https://source.unsplash.com/141x109?LCD,TV"
            width="141"
            height="109"
            alt="LCD TV"
          /> */}

      {/* <Paper sx={{ mx: 1, mt: 1, p: 1 }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="primary.blue2">
            HOT DEALS
          </Typography>
          <Typography sx={{ display: "flex", ml: 2 }}>
            <Countdown>03</Countdown>
            <Dot>:</Dot>
            <Countdown>05</Countdown>
            <Dot>:</Dot>
            <Countdown>26</Countdown>
          </Typography>
          <Typography
            sx={{
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "flex-end",
              // alignSelf: "flex-end",
              justifySelf: "flex-end",
              ml: 6,
              fontSize: (theme) => theme.typography.pxToRem(13.88),
              color: "primary.grey",
            }}
          >
            See All Deals &gt;
          </Typography>
        </Typography>
        <Box
          sx={{
            width: 141,
            height: 202,
            border: "1.25px solid #cce2ff",
            mt: 1,
          }}
        >
          <Box
            sx={{ width: 141, height: 109, backgroundColor: "primary.blue2" }}
          />
          <Stack spacing="5px" sx={{ p: "6.67px" }}>
            <Typography
              variant="h6"
              fontSize={(theme) => theme.typography.pxToRem(12)}
              lineHeight="13px"
            >
              16"inch LCD Dell Monitor with Cables
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing="5px"
              fontSize={(theme) => theme.typography.pxToRem(10.05)}
            >
              <Typography variant="h6">&#8377;16,150</Typography>
              <Typography color="primary.grey" fontSize="inherit">
                <del>21,150</del>
              </Typography>
              <Typography
                color="primary.grey"
                fontSize="inherit"
                fontSize={(theme) => theme.typography.pxToRem(6.87)}
              >
                Per item
              </Typography>
            </Stack>
            <Typography
              color="#828282"
              fontSize={(theme) => theme.typography.pxToRem(10.05)}
            >
              For 50 units
            </Typography>
          </Stack>
          <LinearProgress />
        </Box>
      </Paper> */}
      <Paper
        //  key={index}
        sx={{ mx: 1, mt: 1, p: 1 }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="primary.blue2">
            HOT DEALS
          </Typography>
          <Typography sx={{ display: "flex", ml: 2 }}>
            <Countdown>03</Countdown>
            <Dot>:</Dot>
            <Countdown>05</Countdown>
            <Dot>:</Dot>
            <Countdown>26</Countdown>
          </Typography>
          <Typography
            sx={{
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "flex-end",
              // alignSelf: "flex-end",
              // justifySelf: "flex-end",
              ml: 6,
              fontSize: (theme) => theme.typography.pxToRem(13.88),
              color: "primary.grey",
            }}
          >
            See All Deals &gt;
          </Typography>
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: "scroll",
            mt: 1,
          }}
        >
          {Array.from(Array(10)).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 141,
                height: 222,
                // height: 202,
                border: "1.25px solid #cce2ff",
                borderRadius: "3.76px",
                // mt: 1,
              }}
            >
              {/* <Box
                sx={{
                  width: 141,
                  height: 109,
                  backgroundColor: "primary.blue2",
                }}
              /> */}
              <img
                src="https://source.unsplash.com/141x109?LCD,TV"
                width="141"
                height="109"
                alt="LCD TV"
              />

              <Stack spacing="5px" sx={{ p: "6.67px" }}>
                <Typography
                  variant="h6"
                  fontSize={(theme) => theme.typography.pxToRem(12)}
                  lineHeight="13px"
                >
                  16"inch LCD Dell Monitor with Cables
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing="5px"
                  fontSize={(theme) => theme.typography.pxToRem(10.05)}
                >
                  <Typography variant="h6">&#8377;16,150</Typography>
                  <Typography color="primary.grey" fontSize="inherit">
                    <del>21,150</del>
                  </Typography>
                  <Typography
                    color="primary.grey"
                    // fontSize="inherit"
                    fontSize={(theme) => theme.typography.pxToRem(6.87)}
                  >
                    Per item
                  </Typography>
                </Stack>
                <Typography
                  color="#828282"
                  fontSize={(theme) => theme.typography.pxToRem(10.05)}
                >
                  For 50 units
                </Typography>
                <Progress />
              </Stack>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;

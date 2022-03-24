import { VoiceChat } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import {
  Grid,
  Stack,
  Typography,
  Paper,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";

import Img from "@/components/Img";
import Progress from "@/components/Progress";

import { Countdown, Dot } from "@/components/HotDeals";
import Slide from "@/components/Home/Slide";
import Spark from "@/components/Home/Spark";

const Home = () => {
  return (
    <Box
      //  mt={-5}
      mx={-1}
    >
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
      <Slide />
      <Spark />
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

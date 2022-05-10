import Carousel from "react-material-ui-carousel";
import { TvOutlined } from "@mui/icons-material";
import {
  Badge,
  Link,
  useTheme,
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

// import Slide from "./Slide";

const TrendingShops = () => {
  // const theme = useTheme();

  const lightBlue = "#b3c4ff";
  // const redColor = theme.palette.primary.liveRed;
  // const blackColor = theme.palette.primary.lightBlack;
  // const sparkBlue = theme.palette.primary.sparkBlue2;

  return (
    <Box sx={{ backgroundColor: "#fff", p: "7px 18px" }}>
      <Stack
        direction="row"
        //  sx={{ p: "7px 18px" }}
        alignItems="center"
      >
        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
          Trending Shops
        </Typography>
        <Box flexGrow={1} />
        {/* <Typography>Trending Shops</Typography> */}
        {/* <Link>See All</Link> */}
        <Typography
          sx={{ color: "primary.sparkBlue2", fontSize: 12, fontWeight: 500 }}
        >
          See All
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} sx={{ mt: "13px" }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: 286,
            height: 47,
            borderRadius: "0px 25px 25px 0px",
            background: lightBlue,
            py: "11px",
            px: "6px",
          }}
        >
          <Typography
            sx={{
              // display: "inline-block",
              // p: 1,
              // backgroundColor: "green",
              borderRadius: "50%",
              width: 24,
              height: 24,
              textAlign: "center",
              // mt: "11px",
              // ml: "6px",
              backgroundColor: "#fff",
            }}
          >
            1
          </Typography>
          <Avatar
            src="https://source.unsplash.com/43x43"
            sx={{
              width: 43,
              height: 43,
              ml: "13px",
            }}
          />
          <Stack
            direction="column"
            alignItems="center"
            spacing="2px"
            sx={{ ml: "10px" }}
          >
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, lineHeight: "14.52px" }}
            >
              Pavithra
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "14.52px",
                // letterSpacing: "-2%",
              }}
            >
              @pavithra143
            </Typography>
          </Stack>
          {/* <Box sx={{ p: "7px 18px" }}>
            <Badge
              badgeContent={1}
              color="primary"
              sx={{
                "& .MuiBadge-anchorOriginTopRightRectangular": {
                  width: 24,
                  height: 24,
                },
              }}
            />
          </Box> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default TrendingShops;

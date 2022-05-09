import { TvOutlined, WifiTethering } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const UpcomingLives = () => {
  const theme = useTheme();

  // const redColor = theme.palette.primary.liveRed;
  const blackColor = theme.palette.primary.lightBlack;
  const sparkBlue = theme.palette.primary.sparkBlue2;
  const blueColor = "#2847a1";

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
              Upcoming Lives
            </Typography>
          }
        />
      </ListItem>
      <Stack direction="row" spacing={1} sx={{ overflowX: "scroll", p: 1 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Stack
            key={index}
            direction="column"
            justifyContent="space-between"
            sx={{
              minWidth: 150,
              // height: 165,
              // backgroundColor: "lightgreen",
              borderRadius: "10px",
              // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://source.unsplash.com/130x165?sig=${index})`,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-end"
              sx={{
                p: "12px 9px ",
                height: 120,
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://source.unsplash.com/130x165?sig=${index})`,
              }}
            >
              <Stack direction="row" alignItems="center" spacing="7px">
                <Avatar
                  src="https://source.unsplash.com/29x29?company-logo"
                  alt="user"
                  sx={{
                    width: 29,
                    height: 29,
                    border: `2px solid ${sparkBlue}`,
                    // border: "2px solid blue",
                    // border: "2px solid primary.sparkBlue2",
                  }}
                />
                <Stack direction="column">
                  <Typography
                    sx={{ color: "#fff", fontSize: 10, fontWeight: 700 }}
                  >
                    Sindhu.pvt
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 7,
                      fontWeight: 600,
                      color: "primary.grey3",
                    }}
                  >
                    @sindhu.pvt
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: "10px",
                // height: 100,
                height: 73,
                border: "0.2 solid #000",
                // borderShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Stack direction="row" spacing="9px" alignItems="center">
                <IconButton
                  sx={{
                    width: 20,
                    height: 10,
                    m: 0,
                    p: 0,
                    color: blueColor,
                  }}
                >
                  <WifiTethering />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    // textAlign: "center",
                    // verticalAlign: "center",
                  }}
                >
                  15th April, 6PM
                </Typography>
              </Stack>

              <Button
                variant="contained"
                sx={{
                  width: 95,
                  height: 27,
                  p: "6px 17px",

                  color: "#fff",
                  backgroundColor: "primary.liveRed",
                  borderRadius: "2px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                Notify Me!
              </Button>
            </Stack>
            {/* <Stack
              direction="column"
              sx={{
                p: "4.67px 6.22px",
                // background: "rgba(0, 0, 0, 0.5)",
              }}
              spacing="3px"
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#fff",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Best Selling Electronics under 2000/-
              </Typography>
              <Stack
                direction="row"
                // justifyContent="flex-end"
                alignItems="flex-end"
              >
                <IconButton
                  sx={{
                    m: 0,
                    p: 0,
                    color: "primary.liveRed",
                  }}
                >
                  <Favorite
                    sx={{
                      width: 18,
                      height: 12,
                      m: 0,
                      p: 0,
                      // boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: 9,
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  1.5k
                </Typography>
                <Box flexGrow={1} />
                <IconButton
                  sx={{
                    m: 0,
                    p: 0,
                    color: "#fff",
                    // alignSelf: "center",
                  }}
                >
                  <Visibility
                    sx={{
                      width: 18,
                      height: 12,
                      m: 0,
                      p: 0,
                      // boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: 9,
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  15,000
                </Typography>
              </Stack>
            </Stack>
           */}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default UpcomingLives;

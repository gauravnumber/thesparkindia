import { TvOutlined, Favorite } from "@mui/icons-material";
import {
  IconButton,
  useTheme,
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

const RecentLiveVideos = () => {
  const theme = useTheme();

  const redColor = theme.palette.primary.liveRed;
  const blackColor = theme.palette.primary.lightBlack;
  const sparkBlue = theme.palette.primary.sparkBlue2;

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
              Recent Live Videos
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
              minWidth: 130,
              height: 165,
              // backgroundColor: "lightgreen",
              borderRadius: "10px",
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://source.unsplash.com/130x165?sig=${index})`,
              overflow: "hidden",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                mt: "10px",
                ml: "8px",
              }}
              spacing="7px"
            >
              <Avatar
                src="https://source.unsplash.com/29x29?social-media-user"
                alt="user"
                sx={{
                  width: 29,
                  height: 29,
                }}
              />
              <Stack direction="column">
                <Typography
                  sx={{ color: "#fff", fontSize: 9, fontWeight: 700 }}
                >
                  Sindhu.pvt
                </Typography>
                <Typography
                  sx={{ fontSize: 7, fontWeight: 600, color: "primary.grey3" }}
                >
                  5 hours ago
                </Typography>
              </Stack>
            </Stack>

            <Stack
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
                  }}
                >
                  1.5k
                </Typography>
                <Box flexGrow={1} />
                <span>one</span>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default RecentLiveVideos;

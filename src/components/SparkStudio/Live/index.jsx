import { TvOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

const Live = () => {
  const redColor = "#d90000";

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <ListItem
        component="div"
        secondaryAction={<Typography>See all</Typography>}
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
        <ListItemText primary="Current Lives" />
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
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://source.unsplash.com/130x165?sig=${index})`,
              overflow: "hidden",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                mt: "6px",
                // ml: "6px",
                mx: "6px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing="5px"
                sx={{
                  p: "1px 2px",
                  // mt: "6px",
                  // ml: "6px",
                  color: "#fff",
                  backgroundColor: redColor,
                  display: "inline-block",
                  borderRadius: "2px",
                }}
                // component="span"
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  &bull; Live
                </Typography>
              </Stack>
              <Box flexGrow={1} />
              {/* <Typography>one</Typography> */}
              <Avatar
                src="https://source.unsplash.com/29x29?social-media-user"
                alt="user"
                sx={{
                  width: 29,
                  height: 29,
                }}
              />
            </Stack>

            {/* <Box flexGrow={1} /> */}
            <Stack
              direction="column"
              sx={{
                p: "4.67px 6.22px",
                background: "rgba(0, 0, 0, 0.5)",
              }}
              spacing="3px"
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: 600, color: "#fff" }}
              >
                Sindhu.pvt
              </Typography>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: 400,
                  color: "#fff",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  lineHeight: "11px",
                }}
              >
                Best Selling Electronics under 2000/-
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Live;

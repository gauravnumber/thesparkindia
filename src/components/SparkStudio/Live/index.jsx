import { TvOutlined } from "@mui/icons-material";
import {
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
    <Box
    // sx={{ backgroundColor: "lightblue" }}
    >
      <ListItem
        component="div"
        secondaryAction={<Typography>See all</Typography>}
        sx={{
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
          <Box
            key={index}
            sx={{
              minWidth: 130,
              height: 165,
              // backgroundColor: "lightgreen",
              borderRadius: "10px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://source.unsplash.com/130x165?sig=${index})`,
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
                  Live
                </Typography>
              </Stack>
              <Box flexGrow={1} />
              <Typography>one</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Live;

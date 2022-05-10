import { Avatar, Typography, Box, Stack, IconButton } from "@mui/material";

const Slide = () => {
  return (
    <Box sx={{ mx: "17px", backgroundColor: "lightgreen" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>[Live &bull;]</Typography>
        <Stack>
          <Typography>15,000</Typography>
          <Typography>watching</Typography>
        </Stack>
      </Stack>
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
          <Typography sx={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>
            Sindhu.pvt
          </Typography>
          <Typography
            sx={{ fontSize: 7, fontWeight: 600, color: "primary.grey3" }}
          >
            5 hours ago
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Slide;

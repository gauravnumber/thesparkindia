import { Box, Avatar, Stack, Grid, Typography } from "@mui/material";

const ElectronicItems = () => {
  return (
    <Box
      sx={{
        mt: 1,
        p: 1,
        overflowX: "scroll",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gridAutoFlow: "column",
        gap: "12px",
        height: "100%",
      }}
    >
      {Array.from(Array(12)).map((_, index) => (
        <Stack direction="column" alignItems="center" key={index}>
          <Avatar
            alt="Electronic Items"
            src={`https://source.unsplash.com/85x85?Mobile,Computer,Bulb&sig=${index}`}
            sx={{ height: 85, width: 85 }}
          />
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(14),
              mt: 1,
              lineHeight: (theme) => theme.typography.pxToRem(14),
              textAlign: "center",
            }}
          >
            Mobile phones
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ElectronicItems;

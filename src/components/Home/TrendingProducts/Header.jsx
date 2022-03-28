import { Stack, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        sx={{
          // px: "6px",
          // width: 65,
          // height: 25,
          color: (theme) => theme.palette.primary.blue2,
          fontSize: (theme) => theme.typography.pxToRem(18),
          fontWeight: 500,
        }}
      >
        TRENDING PRODUCTS
      </Typography>
      <Box flexGrow={1} />
      <Typography
        sx={{
          color: "primary.sparkBlue",
          fontSize: (theme) => theme.typography.pxToRem(13.85),
        }}
      >
        See All
      </Typography>
    </Stack>
  );
};

export default Header;

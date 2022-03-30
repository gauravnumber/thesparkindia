import { Button, Stack, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(19),
            // letterSpacing: "0.02em",
            fontWeight: 500,
            color: "primary.blue2",
          }}
        >
          RECENTLY VIEWED PRODUCTS
        </Typography>
      </Typography>
      <Box flexGrow={1} />
      <Button
        sx={{
          backgroundColor: "primary.sparkBlue",
          borderRadius: "3px",
          color: "white",
          fontSize: (theme) => theme.typography.pxToRem(12),
          px: "5px",
          py: "4px",
        }}
      >
        View all &gt;
      </Button>
    </Stack>
  );
};

export default Header;

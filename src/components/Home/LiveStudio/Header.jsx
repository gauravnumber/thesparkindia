import { Stack, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        sx={{
          // fontSize: (theme) => theme.typography.pxToRem(19),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // fontWeight: 500,
        }}
      >
        <Typography
          sx={{
            px: "6px",
            width: 65,
            height: 25,
            color: (theme) => theme.palette.primary.contrastText,
            fontSize: (theme) => theme.typography.pxToRem(18.15),
            backgroundColor: "primary.darkRed",
            borderRadius: "2.31px",
            fontWeight: 500,
          }}
        >
          &#8226; LIVE
        </Typography>
        <Typography
          sx={{
            ml: 1,
            fontSize: (theme) => theme.typography.pxToRem(19),
            fontWeight: 500,
            color: "primary.blue2",
          }}
        >
          STUDIO
        </Typography>
      </Typography>
      <Box flexGrow={1} />
      <Typography
        sx={{
          color: "primary.sparkBlue",
          fontSize: (theme) => theme.typography.pxToRem(13.85),
        }}
      >
        Visit Studio &gt;
      </Typography>
    </Stack>
  );
};

export default Header;

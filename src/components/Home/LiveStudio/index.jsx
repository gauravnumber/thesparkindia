import { Typography, Box, Grid, Stack, Paper } from "@mui/material";

const LiveStudio = () => {
  return (
    <Paper sx={{ mx: 1, mt: 1, p: 1, borderRadius: "3px" }}>
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
              p: "6px",
              color: (theme) => theme.palette.primary.contrastText,
              fontSize: (theme) => theme.typography.pxToRem(18.15),
              backgroundColor: "primary.darkRed",
              borderRadius: "2.31px",
              fontWeight: 500,
            }}
          >
            LIVE
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
    </Paper>
  );
};

export default LiveStudio;

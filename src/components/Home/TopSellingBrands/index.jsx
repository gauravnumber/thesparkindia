import { Avatar, Grid, Typography, Paper, Box, Stack } from "@mui/material";

const TopSellingBrands = () => {
  return (
    <Paper sx={{ mt: 1, p: 1, pb: 2, borderRadius: "unset" }}>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.blue2,
          fontSize: (theme) => theme.typography.pxToRem(18),
          fontWeight: 500,
        }}
      >
        TOP SELLING BRANDS
      </Typography>

      <Grid container rowSpacing={2} mt={1}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid
            key={index}
            item
            xs={4}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src={`https://source.unsplash.com/78x78?sig=${index}`}
              alt="Brand"
              sx={{ width: 78, height: 78 }}
            />
            <Paper sx={{ mt: -1, zIndex: 1000, borderRadius: "unset" }}>
              <Typography
                sx={{
                  // p: "3px",
                  p: 1,
                  fontSize: (theme) => theme.typography.pxToRem(10),
                  lineHeight: (theme) => theme.typography.pxToRem(12),
                }}
              >
                UPTO 60% MARGIN
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TopSellingBrands;

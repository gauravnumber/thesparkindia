import { Typography, Grid, Box, Paper, Stack } from "@mui/material";

const Cards = () => {
  return (
    <Grid container spacing={1}>
      {Array.from(Array(8)).map((_, index) => (
        <Grid key={index} item xs={6}>
          <Stack
            direction="column"
            sx={{
              // width: 177,
              height: 245,
              backgroundColor: (theme) => theme.palette.background.paper,
              border: "1.5px solid #cce2ff",
              borderRadius: (theme) => theme.typography.pxToRem(4.72),
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: (theme) => theme.typography.pxToRem(9.68),
                letterSpacing: "0.04em",
                color: "primary.blue2",
                // alignItems: "center",
                textAlign: "center",
                backgroundColor: "#cce2ff",
                borderRadius: "4.7px 4.7px 0px 0px",
              }}
            >
              Lowest Prices Ever
            </Typography>
            <Box
              sx={{
                // backgroundColor: "black",
                backgroundImage:
                  "url('https://source.unsplash.com/178x151?LCD,screen')",
                // width: "100%",
                // borderColor: "unset",
                height: 151,
              }}
            />
            <Typography
              sx={{
                fontSize: (theme) => theme.typography.pxToRem(14),
                lineHeight: (theme) => theme.typography.pxToRem(17),
                pt: (theme) => theme.typography.pxToRem(9),
                pl: (theme) => theme.typography.pxToRem(9),
              }}
            >
              Best LCD screens for lowest price ever
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: (theme) => theme.typography.pxToRem(15),
                lineHeight: (theme) => theme.typography.pxToRem(16),
                pl: (theme) => theme.typography.pxToRem(9),
                pt: (theme) => theme.typography.pxToRem(9),
              }}
            >
              Up to 80% OFF
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;

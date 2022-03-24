import { IconButton, Paper, Typography, Grid } from "@mui/material";
import { VoiceChat } from "@mui/icons-material";

const Spark = () => {
  return (
    <Paper
      sx={{
        mt: 1,
        mx: 1,
        p: 1,
        //  pb: 3
      }}
    >
      <Typography variant="h6" color="primary.blue2">
        SPARKS
      </Typography>
      <Grid
        container
        // alignItems="center"
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            key={index}
            // spacing={1}
            // rowSpacing={2}
            xs={3}
            // component="button"
          >
            <IconButton
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 37.04,
                },
              }}
            >
              <VoiceChat />
            </IconButton>
            <Typography
              sx={{
                width: 57,
                // height: 26,
                fontSize: (theme) => theme.typography.pxToRem(12),
                textAlign: "center",
              }}
            >
              Scan and Buy
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Spark;

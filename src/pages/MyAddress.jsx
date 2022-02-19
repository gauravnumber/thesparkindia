import { Stack, Paper, Grid, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";

const MyAddress = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Paper sx={{ padding: 2 }} elevation={3}>
          <Grid item container>
            <Grid item xs={10}>
              <Typography variant="h5" component="div" gutterBottom>
                Ravi Shankar
                <Typography
                  ml={2}
                  component="span"
                  variant="h6"
                  color="warning.main"
                >
                  [Home]
                </Typography>
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
                sx={{ lineHeight: 1.2 }}
              >
                (+91) 7568245534 <br />
                152, Old Delhi, India Gate <br />
                Delhi, New Delhi, 110023
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              container
              // backgroundColor="success.dark"
            >
              <IconButton size="large">
                <HomeOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Add a new address </Typography>
            <IconButton>
              <PlusOneOutlinedIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyAddress;

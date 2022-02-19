import {
  Avatar,
  Stack,
  Paper,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";

const MyAddress = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Paper sx={{ padding: 2 }} elevation={3}>
          <Grid item container>
            <Grid item xs={9}>
              <Typography variant="body1" component="div" gutterBottom>
                Ravi Shankar
                <Typography
                  ml={2}
                  component="span"
                  variant="body2"
                  color="warning.main"
                >
                  [Home]
                </Typography>
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
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
              xs={3}
              container
              // backgroundColor="success.dark"
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,

                  // backgroundColor: "blue"
                }}
              >
                <HomeOutlinedIcon sx={{ fontSize: 60 }} />
              </Avatar>
              {/* <IconButton size="large">
                <HomeOutlinedIcon />
              </IconButton> */}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} sx={{ p: 2, maxWidth: 250 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography color="text.secondary">Add a new address </Typography>
            <Typography color="text.secondary" fontSize={25} fontWeight="700">
              +
            </Typography>
            {/* <IconButton>
              <PlusOneOutlinedIcon />
            </IconButton> */}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyAddress;

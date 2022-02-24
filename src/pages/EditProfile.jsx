import {
  IconButton,
  Box,
  Avatar,
  Button,
  Typography,
  Paper,
  Grid,
  Stack,
  alpha,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const EditProfile = () => {
  const profileInfo = [
    {
      primaryText: "Sparkindia",
      secondaryText: "User name",
    },
    {
      primaryText: "1234567890",
      secondaryText: "mobile no",
    },
    {
      primaryText: "sparkindia@gmail.com",
      secondaryText: "Email",
    },
    {
      primaryText: "123123",
      secondaryText: "Password",
    },
  ];
  return (
    <>
      {/* <Box
        sx={{
          // borderRadius: "unset",
          // width: "100%",
          height: "20rem",
          // backgroundColor: "black",
        }}
      >
        <IconButton size="large" fontSize="10px">
          <AccountCircleOutlinedIcon fontSize="10px" />
        </IconButton>
      </Box> */}
      <Stack direction="column" spacing={3} mt={-5} mx={-1}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "gray", height: "15rem" }}
        >
          <Paper
            elevation={1}
            sx={{
              borderRadius: "12px",
              minWidth: "7rem",
              // maxWidth: "5rem",

              // height: "5rem",

              // minHeight: "5rem",
              minHeight: "7rem",
              py: 1,
              px: 0.5,
            }}
          >
            <Avatar
              sx={{
                // height: "100%",
                // width: "100%",
                minWidth: 1,
                height: "unset",
                // height: "4rem",
                // minHeight: 4,
              }}
            />

            {/* <Grid
              container
              direction="column"
              // direction="row"
              // justifyContent="space-around"
              // alignItems="center"
              sx={{
                // maxWidth: "100%",
                minHeight: "100%",
              }}
              p={1}
              // spacing={4}
              // height="176"
            >
              <Grid item xs={10}>
                <Avatar
                  sx={{
                    minWidth: 1,
                    // height: "4rem",
                    minHeight: 4,
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton size="small">
                  <EditOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid> */}
          </Paper>
        </Stack>

        {profileInfo.map((profile, index) => (
          <Paper
            key={profile.primaryText + index}
            sx={{
              p: 2,
              borderRadius: "unset",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
            }}
          >
            <Typography variant="h5" component="div" color="primary.main">
              {profile.primaryText}
              {/* Sparkindia */}
            </Typography>
            <Typography
              align="right"
              variant="h6"
              component="div"
              color="primary.main"
              fontWeight="normal"
            >
              {/* {profile.secondaryText} */}
              Change{" "}
              <IconButton>
                <KeyboardArrowRightOutlinedIcon />
              </IconButton>
            </Typography>
            <Typography component="div" color="text.secondary">
              {profile.secondaryText}
              {/* User name */}
            </Typography>
          </Paper>
        ))}
        <Paper
          // key={profile.primaryText + index}
          sx={{
            p: 2,
            borderRadius: "unset",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          }}
        >
          <Typography variant="h5" component="div" color="primary.main">
            Log Me Out From All Devices
            {/* Sparkindia */}
          </Typography>
          {/* <Typography
            align="right"
            variant="h6"
            component="div"
            color="primary.main"
            fontWeight="normal"
          >
            Change
          </Typography> */}
          <Typography component="div" color="text.secondary">
            account security
            {/* User name */}
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 2,
            borderRadius: "unset",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          }}
        >
          <Typography
            variant="h5"
            component="div"
            color="primary.main"
            gutterBottom
          >
            Link your account to
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Paper
                key={index}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.secondary.main, 0.1),
                }}
              />
            ))}
          </Stack>
        </Paper>

        <Stack justifyContent="center" direction="row">
          <Button
            sx={{
              textTransform: "none",
              color: (theme) => theme.palette.text.primary,
              // color: "black",
              border: "1px solid grey",
              // borderColor: "grey[500]",
              width: "15rem",
              // textAlign: "center",
            }}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default EditProfile;

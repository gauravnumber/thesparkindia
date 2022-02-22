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
      <Stack direction="column" spacing={3}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "gray", height: "15rem" }}
        >
          <Paper elevation={1} sx={{ width: "5rem", height: "5rem" }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar />
              pencil icon
            </Stack>
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
              Change
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
              color: "black",
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

      {/* <Paper
        sx={{
          p: 2,
          borderRadius: "unset",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
        }}
      >
        <Typography variant="h5" component="div" color="primary.main">
          Sparkindia
        </Typography>
        <Typography
          align="right"
          variant="h6"
          component="div"
          color="primary.main"
          fontWeight="normal"
        >
          Change
        </Typography>
        <Typography component="div" color="text.secondary">
          User name
        </Typography>
      </Paper> */}
    </>
  );
};

export default EditProfile;

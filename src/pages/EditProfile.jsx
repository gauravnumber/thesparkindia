import { Typography, Paper, Grid, Stack, alpha } from "@mui/material";

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
    // {
    //   primaryText: "Log Me Out From All Devices",
    //   secondaryText: "account security",
    // },
  ];
  return (
    <>
      <Stack direction="column" spacing={3}>
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

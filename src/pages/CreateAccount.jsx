import {
  Google,
  Facebook,
  Apple,
  Twitter,
  Check,
  Shield,
} from "@mui/icons-material";

import {
  GlobalStyles,
  IconButton,
  Button,
  Paper,
  TextField,
  Box,
  Stack,
  Typography,
} from "@mui/material";

const CreateAccount = () => {
  const blueColor = "#2847a1";
  const ashColor = "#999898";
  const greyColor = "#a9a9a9";

  const icons = [<Google />, <Facebook />, <Apple />, <Twitter />];

  return (
    <Box p={2}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "white",
          },
        }}
      />

      <Typography sx={{ color: ashColor, fontSize: "14.1px" }}>
        Mobile number{" "}
        {/* <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              width: 12,
              height: 14.6,
            },
          }}
        >
          <Shield />
          <Check />
        </IconButton> */}
      </Typography>
      <Typography
        sx={{ color: greyColor, fontSize: "18.5px", fontWeight: 300 }}
      >
        89562348552
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField placeholder="Name" fullWidth required />
        <TextField
          placeholder="Email (Optional)"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        />

        <Typography
          sx={{
            color: ashColor,
            fontSize: "14.18px",
          }}
        >
          Create Password
        </Typography>
        <TextField
          placeholder="Password"
          type="password"
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        <Typography
          sx={{
            color: ashColor,
            fontSize: "14.18px",
          }}
        >
          Confirm Password
        </Typography>
        <TextField
          placeholder="Password"
          type="password"
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <Typography
          sx={{
            color: ashColor,
            fontSize: "14.18px",
          }}
        >
          Referral Code
        </Typography>
        <TextField
          placeholder="Referral Code (Optional)"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: blueColor }}
        >
          Register
        </Button>
      </Box>
      <Typography
        sx={{
          mt: 10,
          textAlign: "center",
          color: greyColor,
        }}
      >
        Or Continue with Social Accounts
      </Typography>
      <Stack
        direction="row"
        spacing="12px"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {icons.map((icon, index) => (
          <Paper key={index}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ width: 68.75, height: 64 }}
            >
              <IconButton>{icon}</IconButton>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default CreateAccount;

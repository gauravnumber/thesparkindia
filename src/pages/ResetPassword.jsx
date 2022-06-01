import { useState } from "react";
import {
  GlobalStyles,
  Typography,
  Box,
  Button,
  TextField,
  Stack,
} from "@mui/material";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState("");
  const helperTextColor = "#999898";

  const handleResetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Stack
      direction="column"
      sx={{
        mt: "67px",
        mx: 5,
      }}
    >
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          mb: "23px",
        }}
      >
        Reset Password
      </Typography>
      <Typography
        sx={{
          color: helperTextColor,
          mb: "31px",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "19px",
        }}
      >
        Enter your email or mobile number and we will send a link on your email
        to reset your password
      </Typography>

      <form onSubmit={handleResetPassword}>
        <TextField
          placeholder="Enter your Email or Mobile number"
          value={resetPassword}
          onChange={(e) => setResetPassword(e.target.value)}
          // error={error}
          sx={{
            // mt: "40px",
            mb: "23px",
            "& .MuiOutlinedInput-input": {
              fontSize: (theme) => theme.typography.pxToRem(14),
              fontWeight: 400,
              // color: "red",
              // p: "18px 20px",
              // color: helperTextColor,
            },
          }}
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 1.5,
            // mt: 3,
            backgroundColor: "primary.sparkBlue2",
          }}
          type="submit"
        >
          SEND LINK
        </Button>
      </form>
    </Stack>
  );
};

export default ResetPassword;

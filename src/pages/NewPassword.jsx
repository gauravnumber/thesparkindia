import {
  Box,
  Button,
  GlobalStyles,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const blueColor = "#2847a1";
  const greyColor = "#686868";
  const redColor = "#d90000";

  const handleNewPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ p: 2 }}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "white",
          },
        }}
      />
      <Typography
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(24),
          fontWeight: 500,
          color: "#2847a1",
        }}
      >
        Create New Password
      </Typography>
      <form onSubmit={handleNewPassword}>
        <TextField
          placeholder="New Password*"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={error}
          sx={{
            mt: "40px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
          }}
          fullWidth
        />
        <TextField
          placeholder="Confirm Password*"
          type="password"
          sx={{ mt: "25px" }}
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={error}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 1.5,
            mt: 3,
            backgroundColor: blueColor,
          }}
          type="submit"
        >
          Continue
        </Button>
      </form>
    </Box>
  );
};

export default NewPassword;

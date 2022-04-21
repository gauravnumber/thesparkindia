import { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Signup = () => {
  const [mobileNumber, setMobileNumber] = useState();

  const blueColor = "#2847a1";
  const greyColor = "#686868";

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Spark India</Typography>
      <Typography
        sx={{
          mt: "35px",
          // mt: "43px",
          fontSize: (theme) => theme.typography.pxToRem(24),
          fontWeight: 500,
          color: "#2847a1",
        }}
      >
        Login/Signup
      </Typography>
      <Typography
        sx={{
          mt: "27px",
          fontSize: (theme) => theme.typography.pxToRem(24),
          color: "#999898",
          // width: 106,
          // height: 33,
        }}
      >
        Welcome!
      </Typography>

      <TextField
        label="Mobile Number*"
        // placeholder="Mobile Number*" 52px
        InputProps={{
          startAdornment: <Typography>+91</Typography>,
        }}
        sx={{
          mt: "27px",
          fontWeight: 300,
          fontSize: (theme) => theme.typography.pxToRem(19),
          color: "#a9a9a9",
        }}
      />

      <Typography
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(16),
          color: "#686868",
          mt: "40px",
        }}
      >
        By contuning, I agree to the{" "}
        <Typography
          component="span"
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(16),
            color: "#2847a1",
          }}
        >
          Terms of Use
        </Typography>{" "}
        &amp;{" "}
        <Typography
          component="span"
          sx={{
            color: "#2847a1",
          }}
        >
          Privacy Policy
        </Typography>
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 5,
          backgroundColor: blueColor,
        }}
      >
        CONTINUE
      </Button>

      <Typography sx={{ mt: "34px", color: greyColor }}>
        Having trouble logging in?{" "}
        <Typography component="span" sx={{ color: blueColor }}>
          Get Help
        </Typography>
      </Typography>
    </Box>
  );
};

export default Signup;

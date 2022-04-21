// import { red } from "@mui/material/colors";
import { TextField, Box, Typography, Button } from "@mui/material";

const Login = () => {
  const blueColor = "#2847a1";
  const greyColor = "#686868";
  const redColor = "#d90000";

  return (
    <Box sx={{ p: 2 }}>
      {/* <Typography>Spark India</Typography> */}
      <Typography
        sx={{
          // mt: "35px",
          // mt: "43px",
          fontSize: (theme) => theme.typography.pxToRem(24),
          fontWeight: 500,
          color: "#2847a1",
        }}
      >
        Login to your Account
      </Typography>
      <Typography
        sx={{
          mt: "20px",
          fontSize: (theme) => theme.typography.pxToRem(17.5),
          color: "#999898",
        }}
      >
        Welcome!
      </Typography>

      <TextField
        placeholder="Email or Mobile Number*"
        // inputMode="numeric"
        // pattern="[0-9]*"
        // inputProps={{
        //   inputmode: "numeric",
        //   pattern: "[0-9]*",
        // }}
        // placeholder="Mobile Number*" 52px
        // InputProps={{
        //   startAdornment: <Typography>+91</Typography>,
        // }}
        sx={{
          mt: "40px",
          fontWeight: 300,
          fontSize: (theme) => theme.typography.pxToRem(19),
          "& .MuiOutlinedInput-input": {
            // color: "#a9a9a9",
            // p: 0,
            // height: 43,
            // textAlign: "center",
          },
        }}
        fullWidth
      />
      <TextField
        placeholder="Password*"
        type="password"
        sx={{ mt: "25px" }}
        fullWidth
      />

      <Typography
        sx={{ mt: 1, color: redColor, textAlign: "right", fontSize: "14px" }}
      >
        Forgot Password
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          p: 1.5,
          mt: 3,
          backgroundColor: blueColor,
        }}
      >
        Login
      </Button>

      <Typography
        sx={{
          mt: 10,
          textAlign: "center",
          color: greyColor,
        }}
      >
        Or Continue with Social Accounts
      </Typography>
      {/* <Typography sx={{ mt: "34px", color: greyColor }}>
        Having trouble logging in?{" "}
        <Typography component="span" sx={{ color: blueColor }}>
          Get Help
        </Typography>
      </Typography> */}
    </Box>
  );
};

export default Login;

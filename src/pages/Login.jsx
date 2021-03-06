import { Google, Facebook, Apple, Twitter } from "@mui/icons-material";
import {
  Paper,
  GlobalStyles,
  IconButton,
  Stack,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import userService from "@/services/userService";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const user = localStorage.getItem("loggedUser");

  //   if (user) navigate("/");
  // }, []);

  // useEffect(() => {
  //   userService.login().then((response) => console.log(response.data));
  // }, []);

  // console.log(import.meta.env.VITE_BACKEND_URL);

  const handleLogin = (e) => {
    e.preventDefault();

    userService
      .login(email, password)
      .then((response) => {
        console.log(response);

        // console.log(`response.token`, response.token);
        userService.setToken(response.token);
        window.localStorage.setItem("loggedUser", JSON.stringify(response));

        setError(false);
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
    // .catch((error) => console.error(error.message));

    // console.log(email, password);
  };
  const blueColor = "#2847a1";
  const greyColor = "#686868";
  const redColor = "#d90000";

  const icons = [<Google />, <Facebook />, <Apple />, <Twitter />];

  return (
    <Box sx={{ p: 2 }}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "white",
          },
        }}
      />
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

      <form onSubmit={handleLogin}>
        <TextField
          placeholder="Email or Mobile Number*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
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
          type="submit"
        >
          Login
        </Button>
      </form>

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

export default Login;

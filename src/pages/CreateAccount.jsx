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
import userService from "@/services/userService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referal, setReferal] = useState("");
  const navigate = useNavigate();
  // const [value, setValue] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   currentPassword: "",
  //   referal: "",
  // });

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await userService.createAccount({
        name,
        email,
        password,
        confirmPassword,
        referal,
      });

      // console.log(`response`, response);
      localStorage.setItem("loggedUser", response.token);
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
    // console.log(`response.data`, response.data);
  };

  // const handleField = (e) => {
  //   const name = e.target.name;
  //   // console.log(`name`, name);
  //   // setValue({ ...value, name: e.target.value });
  // };
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
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleCreateAccount}>
        <TextField
          placeholder="Name"
          fullWidth
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={handleField}
        />
        <TextField
          placeholder="Email (Optional)"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handleField}
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
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          name="referal"
          value={referal}
          onChange={(e) => setReferal(e.target.value)}
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

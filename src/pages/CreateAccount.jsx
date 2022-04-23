import { TextField, Box, Stack, Typography } from "@mui/material";

const CreateAccount = () => {
  const ashColor = "#999898";
  const grey = "#a9a9a9";

  return (
    <Box p={2}>
      <Typography sx={{ color: ashColor, fontSize: "14.1px" }}>
        Mobile number
      </Typography>
      <Typography sx={{ color: grey, fontSize: "18.5px", fontWeight: 300 }}>
        89562348552
      </Typography>
      <Box component="form" sx={{ mt: 2 }} onSubmit={() => alert("hi")}>
        <TextField placeholder="Name" fullWidth required />
        <TextField
          placeholder="Email (Optional)"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        />

        <Typography>Create Password</Typography>
        <TextField placeholder="Password" fullWidth />
      </Box>
    </Box>
  );
};

export default CreateAccount;

import {
  Refresh,
  Edit,
  EditOutlined,
  ArrowRightAlt,
} from "@mui/icons-material";
import {
  IconButton,
  Stack,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";

const VerifyWithOtp = () => {
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
        Verify With OTP
      </Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",

          mt: "27px",
          fontSize: (theme) => theme.typography.pxToRem(14),
          color: "#999898",
        }}
      >
        Verify via SMS to
        <Typography
          component="span"
          sx={{
            ml: 1,
            fontSize: (theme) => theme.typography.pxToRem(14),
            color: "#2847a1",
          }}
        >
          8956234555
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography component="span">
          {/* <Typography component="span" sx={{ float: "right" }}> */}
          Edit{" "}
          <IconButton
            sx={{
              color: blueColor,
              "& .MuiSvgIcon-root": {
                width: 15,
              },
            }}
          >
            <EditOutlined />
          </IconButton>
        </Typography>
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: "27px",
        }}
      >
        <TextField
          // label="Mobile Number*"
          // type="number"
          // inputMode="numeric"
          // pattern="[0-9]*"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
            tabIndex: 0,
            // min: 0,
            // max: 9,
          }}
          // placeholder="Mobile Number*" 52px
          // InputProps={{
          //   startAdornment: <Typography>+91</Typography>,
          // }}
          sx={{
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            color: "#a9a9a9",
            width: 35,
            // padding: 0,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
        <TextField
          // inputMode="numeric"
          // pattern="[0-9]*"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
            tabIndex: 0,
          }}
          sx={{
            mt: "27px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            width: 35,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
        <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
            tabIndex: 0,
          }}
          sx={{
            mt: "27px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            width: 35,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
        <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
          }}
          sx={{
            mt: "27px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            width: 35,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
        <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
          }}
          sx={{
            mt: "27px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            width: 35,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
        <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxlength: 1,
            size: 1,
          }}
          sx={{
            mt: "27px",
            fontWeight: 300,
            fontSize: (theme) => theme.typography.pxToRem(19),
            width: 35,
            "& .MuiOutlinedInput-input": {
              p: 0,
              height: 43,
              textAlign: "center",
            },
          }}
        />
      </Stack>

      {/* <input
        type="text"
        style={{ width: 35, height: 43, padding: 0, textAlign: "center" }}
      /> */}

      <Typography
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(16),
          color: "#686868",
          mt: "40px",
        }}
      >
        Auto detecting in{" "}
        <Typography
          component="span"
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(16),
            color: "#2847a1",
          }}
        >
          1:00
          <IconButton sx={{ color: blueColor }}>
            <Refresh />
          </IconButton>
        </Typography>
      </Typography>
      <Typography
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(16),
          color: "#686868",
          mt: "23px",
        }}
      >
        Or Continue with{" "}
        <Typography
          component="span"
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(16),
            color: "#2847a1",
          }}
        >
          Password
          <IconButton sx={{ color: blueColor }}>
            <ArrowRightAlt />
          </IconButton>
        </Typography>
      </Typography>
      <Typography
        sx={{
          fontSize: (theme) => theme.typography.pxToRem(16),
          color: "#686868",
          mt: "23px",
        }}
      >
        Having trouble logging in?{" "}
        <Typography
          component="span"
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(16),
            color: "#2847a1",
          }}
        >
          Get help
        </Typography>
      </Typography>
    </Box>
  );
};

export default VerifyWithOtp;

import { Box, Typography, IconButton, Divider, Switch } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function PrivasySettings() {
  return (
    <div>
      <Box
        sx={{
          width: 360,
          height: 907,
          background: "#FFFFFF",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              fontSize: 22,
              fontWeight: 500,
              height: 22,
              my: 3,
            }}
          >
            <IconButton
              edge="start"
              sx={{
                mx: 1,
                color: "#223263",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            Privacy settings
          </Typography>
        </Box>
        <Divider
          sx={{
            bgcolor: "#E5E5E5",
            height: 10,
          }}
        />

        <Box
          sx={{
            position: "relative",
            m: 2,
          }}
        >
          <AccountCircleRoundedIcon />
          <Typography
            sx={{
              position: "absolute",
              bottom: 5,
              left: 42,
              color: "#717171",
            }}
          >
            Account information
          </Typography>
        </Box>

        <Divider
          sx={{
            bgcolor: "#00000014",
            left: 15,
          }}
        />

        <Box
          sx={{
            position: "relative",
            m: 2,
          }}
        >
          <LockOutlinedIcon />
          <Typography
            sx={{
              position: "absolute",
              bottom: 5,
              left: 42,
              color: "#717171",
            }}
          >
            Change your password
          </Typography>
        </Box>
        <Divider
          sx={{
            bgcolor: "#00000014",
            left: 15,
          }}
        />
        <Box>
          <Typography
            sx={{
              my: 2,
              mx: 1,
              fontFamily: "Roboto",
              fontSize: 22,
              fontWeight: 500,
              height: 22,
              color: "#000000",
            }}
          >
            Other settings
          </Typography>
          <Typography
            sx={{
              m: 1,
              color: "#717171",
            }}
          >
            clear browse history
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              ml: 1,
              my: 1,
              color: "#717171",
            }}
          >
            pause my search
            <Switch
              size="small"
              color="secondary"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              ml: 1,
              my: 1,
              color: "#717171",
            }}
          >
            Allow spark india to access your location
            <Switch
              size="small"
              color="secondary"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              ml: 1,
              my: 1,
              color: "#717171",
            }}
          >
            Allow spark india to access contact list
            <Switch
              size="small"
              color="secondary"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              ml: 1,
              my: 1,
              color: "#717171",
            }}
          >
            Allow spark india to access microphone
            <Switch
              size="small"
              color="secondary"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              ml: 1,
              my: 1,
              color: "#717171",
            }}
          >
            Allow spark india to access camera
            <Switch
              size="small"
              color="secondary"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          </Typography>
          <Divider
            sx={{
              bgcolor: "#00000014",
              left: 15,
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default PrivasySettings;

import { Box, Checkbox, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Language() {
  return (
    <div className="App">
      <Box
        sx={{
          mx: -1,
          background: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            English
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Tamil
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Kananada
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Malayalam
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Hindi
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Urdu
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Telgu
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Marathi
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Bengali
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#223263",
              fontFamily: "Roboto",
              m: 2,
            }}
          >
            Gujarathi
            <Checkbox
              sx={{
                position: "absolute",
                right: 0,
              }}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </Typography>
          <Divider />
        </Box>
      </Box>
    </div>
  );
}

export default Language;

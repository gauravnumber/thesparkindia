import { Typography, IconButton, Box, Checkbox, Divider } from "@mui/material";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Language() {
  return (
    <Box
      sx={{
        mx: -1,
        pt: 1,
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
  );
}

export default Language;

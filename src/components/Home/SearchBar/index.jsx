import { TextField, InputAdornment, IconButton } from "@mui/material";
import { SearchOutlined, Mic } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <TextField
      size="small"
      sx={{
        mt: 1,
        px: 1,
        // borderRadius: "15px",
        // bgcolor: "background.blue2",
        // bgcolor: "background.paper",

        "&.MuiFormControl-root": {
          backgroundColor: "primary.blue2",
          padding: "7px",
          marginTop: 0,
        },

        "& .MuiOutlinedInput-root": {
          background: "white",
          overflow: "hidden",
          // paddingRight: "5px",
        },

        "& .MuiInputAdornment-positionEnd": {
          background: "green",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton edge="start">
              <SearchOutlined />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              // edge="end"
              sx={{
                color: "primary.blue2",
                backgroundColor: "primary.lightBlue",
                // borderRadius: " 0 5px 5px 0",
                borderRadius: "unset",
                marginRight: "-14px",
                overflow: "hidden",
              }}
            >
              <Mic />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBar;

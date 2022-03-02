import { IconButton, InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const Enquiry = () => {
  return (
    <>
      {" "}
      <TextField
        size="small"
        sx={{
          // width: "20ch",
          borderRadius: "12px",
        }}
        InputProps={{
          // borderRadius: "12px",

          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </>
  );
};

export default Enquiry;

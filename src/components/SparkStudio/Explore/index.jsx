import { Mic, SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField, Box, InputAdornment } from "@mui/material";

const Explore = () => {
  return (
    // <Box sx={{ backgroundColor: "primary.blue2", p: 2 }}>
    //   <TextField
    //     placeholder="search"
    //     fullWidth
    //     sx={{
    //       backgroundColor: "#fff",
    //       //  overflow: "hidden"
    //     }}
    //   />
    // </Box>
    <TextField
      placeholder="Search"
      size="small"
      // inputProps={{
      //   borderRadius: "15px",
      // }}
      sx={{
        mt: 1,
        px: 1,
        "&.MuiFormControl-root": {
          backgroundColor: "primary.blue2",
          padding: "7px",
          marginTop: 0,
        },

        "& .MuiOutlinedInput-root": {
          background: "white",
          overflow: "hidden",
          borderRadius: "12px",
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
        // endAdornment: (
        //   <InputAdornment position="end">
        //     <IconButton
        //       // edge="end"
        //       sx={{
        //         color: "primary.blue2",
        //         backgroundColor: "primary.lightBlue",
        //         // borderRadius: " 0 5px 5px 0",
        //         borderRadius: "unset",
        //         marginRight: "-14px",
        //         overflow: "hidden",
        //       }}
        //     >
        //       <Mic />
        //     </IconButton>
        //   </InputAdornment>
        // ),
      }}
      fullWidth
    />
  );
};

export default Explore;

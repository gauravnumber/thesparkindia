import { useState } from "react";

import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  Menu,
  Card,
  TextField,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  SearchOutlined,
  FilterListOutlined,
} from "@mui/icons-material";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const MyOrders = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid
          item
          xs
          // bgcolor="secondary.main"
        >
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            fullWidth
          >
            <OutlinedInput
              fullWidth
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange("weight")}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            {/* <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText> */}
          </FormControl>

          <IconButton
            size="large"
            // edge="end"
          >
            <FilterListOutlined />
          </IconButton>
          <Typography component="span">Filters</Typography>
        </Grid>

        <Grid item xs>
          input
        </Grid>
        <Grid item xs>
          input
        </Grid>
      </Grid>
    </>
  );
};

export default MyOrders;

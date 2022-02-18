import { useState } from "react";

import {
  Tab,
  Tabs,
  Box,
  Divider,
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
        //  sx={{ p: 3 }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MyOrders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        // marginX={0}
      >
        <Grid
          item
          container
          alignItems="center"
          xs
          // bgcolor="secondary.main"
        >
          <TextField
            size="small"
            sx={{
              width: "25ch",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            // fullWidth
          />

          <IconButton
            size="large"
            // edge="end"
          >
            <FilterListOutlined />
          </IconButton>
          <Typography component="span" variant="body2">
            Filters
          </Typography>
        </Grid>

        <Grid item>
          <Divider mb={9} />
        </Grid>
        <Grid item xs>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
              <Tab label="On the way" />
              <Tab label="Delivered" />
              <Tab label="Cancelled" />
              <Tab label="Returned" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Grid>
        <Grid item xs>
          input
        </Grid>
      </Grid>
    </>
  );
};

export default MyOrders;

import { useState } from "react";
import TabPanel from "../components/TabPanel";

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
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  Rating,
  styled,
} from "@mui/material";

import {
  SearchOutlined,
  FilterListOutlined,
  FavoriteBorderOutlined as FavoriteIcon,
} from "@mui/icons-material";

const MyOrders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const OrderTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    padding: 0,
  }));

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

        {/* <Grid item>
          <Divider mb={9} />
        </Grid> */}
        <Grid item xs>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              // sx={{ marginBottom: 1 }}
            >
              <OrderTab label="On the way" />
              <OrderTab label="Delivered" />
              <OrderTab label="Cancelled" />
              <OrderTab label="Returned" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid
              container
              item
              spacing={1}
              //  direction="row" columns={2}
            >
              <Grid item xs={4}>
                <img
                  // style={{ maxWidth: "100%" }}

                  src="https://placeimg.com/80/80/any"
                  alt="Random pic"
                />
              </Grid>
              <Grid
                item
                xs={8}
                //  container
                // direction="column"
              >
                <Typography
                  // sx={{ display: "inline" }}

                  // variant="h6"
                  fontWeight="bold"
                  fontSize={17}
                  // fontWeight={900}
                  gutterBottom
                >
                  Premium Red LED 5V
                </Typography>
                <Typography
                  fontSize={15}
                  // variant="caption"
                >
                  Expected Delivery on Thu 5-Jan-2022
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>two</Grid> */}
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel> */}
        </Grid>
        {/* <Grid item xs>
          input
        </Grid> */}
      </Grid>
    </>
  );
};

export default MyOrders;

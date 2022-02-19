import { Box, Typography, Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  // console.log(`value`, value);
  // console.log(`index`, index);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Grid container direction="column" spacing={1} mt={0.1}>
            {children}
          </Grid>
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;

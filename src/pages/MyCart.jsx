import {
  RadioGroup,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  Paper,
  Grid,
  Stack,
  Checkbox,
} from "@mui/material";

const MyCart = () => {
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2 }}>
        <FormControl>
          <FormLabel id="address1">Deliver to</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="address1"
              control={<Radio />}
              label="Random address here..."
            />
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                // width: 46,
              }}
              // fullWidth
            >
              Change
            </Button>
          </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default MyCart;

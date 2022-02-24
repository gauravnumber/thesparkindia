import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const MyCart = () => {
  const Img = styled("img")`
    width: 100%;
  `;
  return (
    <Stack direction="column" spacing={2}>
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
                color: (theme) => theme.palette.text.primary,
              }}
            >
              Change
            </Button>
          </RadioGroup>
        </FormControl>
      </Paper>
      {Array.from(Array(5)).map((_, index) => (
        <Paper key={index} elevation={2}>
          <Grid container direction="row" spacing={1} p={1}>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Img
                src="https://source.unsplash.com/90x130"
                alt={"vendor" + index}
                loading="lazy"
                // height={100}
              />
              <Typography color="text.secondary" variant="subtitle1">
                Vendor
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="column" spacing={3}>
                <Img
                  src="https://source.unsplash.com/150x60"
                  alt={"item" + index}
                  // height="60"
                  loading="lazy"
                />
                <ButtonGroup size="small" variant="outlined">
                  <Button>-</Button>
                  <Button>2</Button>
                  <Button>+</Button>
                </ButtonGroup>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  Remove
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Stack>
  );
};

export default MyCart;

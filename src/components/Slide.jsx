import { HouseOutlined } from "@mui/icons-material";
import { IconButton, Paper, Typography, Button } from "@mui/material";
import Img from "@/components/Img";

function Slide(props) {
  return (
    <Paper
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        backgroundImage: "url('https://source.unsplash.com/393x169?black')",
        // bgcolor: "black",
        color: "#fff",
        borderRadius: 0,
        height: 169,
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: (theme) => theme.typography.pxToRem(21.5),
          letterSpacing: "0.04em",
          // pt: (theme) => theme.typography.pxToRem(18.15),
        }}
      >
        {props.item.name}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: (theme) => theme.typography.pxToRem(11.59),
          letterSpacing: "0.04em",
          // pt: (theme) => theme.typography.pxToRem(1),
        }}
      >
        {props.item.description}
      </Typography>

      <Button
        sx={{
          // p: 0,
          //  backgroundColor: (theme) => theme.palette.common.white
          color: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => theme.palette.background.paper,
          fontWeight: 500,
          fontSize: (theme) => theme.typography.pxToRem(11.59),
          letterSpacing: "0.04em",
          mt: 1,
          mb: 2,
        }}
      >
        {props.item.buttonText}
      </Button>
      <br />

      <Typography>
        <IconButton color="inherit" sx={{ p: 0 }}>
          <HouseOutlined />
        </IconButton>{" "}
        | {props.item.companyName}
      </Typography>

      {/* <img
        // sx={{ mt: 2 }}
        src="https://source.unsplash.com/80x32"
        alt="company logo"
        // width="40"
      /> */}
    </Paper>
  );
}

export default Slide;

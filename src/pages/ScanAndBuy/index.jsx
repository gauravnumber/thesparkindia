import {
  Close,
  HelpOutline,
  FlashlightOffSharp as FlashlightOff,
  BrowseGallery,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import SwipeBox from "./SwipeBox";

const ScanAndBuy = () => {
  // const camera = useRef(null);
  // const [image, setImage] = useState(null);
  // const [open, setOpen] = useState(true);
  const [open, setOpen] = useState(false);

  const videoConstraints = {
    facingMode: {
      exact: "environment",
    },
  };
  // const videoConstraints = { facingMode: "user" };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Webcam videoConstraints={videoConstraints} />
        {/* <Webcam ref={camera} /> */}
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          // zIndex: -1,
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        // alignItems="center"
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          px: "5px",
          mt: 0,
          pt: 0,
          //  ml: 2, mr: 5
          color: "white",
        }}
      >
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
              width: "18px",
              height: "18px",
            },
          }}
        >
          <Close />
          {/* <CropSquareSharp /> */}
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            // width: 106,
            // height: 25,
            fontSize: (theme) => theme.typography.pxToRem(21.5),
            // lineHeight: (theme) => theme.typography.pxToRem(15),
          }}
        >
          SparkIndia
        </Typography>
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
            },
          }}
        >
          <HelpOutline />
        </IconButton>
      </Stack>

      <Box
        sx={{
          width: 274,
          // height: 276,
          // height: 376,
          // height: 276,
          height: 307,
          position: "fixed",
          top: "calc(50% - 192px)",
          left: "calc(50% - 133px)",
          border: "5px solid black",
          borderRadius: "37px",
          // bgcolor: "blue",
          overflow: "hidden",
          // backgroundColor: "transparent",
          // zIndex: 999999999999,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Webcam videoConstraints={videoConstraints} />
      </Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "absolute",
          top: "75%",
          left: "calc(50% - 75px)",
        }}
      >
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              // color: "white",
              width: "51px",
              height: "51px",
              // borderRadius: "50%",
            },
          }}
        >
          <FlashlightOff />
        </IconButton>
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              // color: "white",
              width: "51px",
              height: "51px",
              // borderRadius: "50%",
            },
          }}
        >
          <BrowseGallery />
        </IconButton>
      </Stack>

      <SwipeableDrawer
        anchor="bottom"
        // container={
        //   window !== undefined ? () => window().document.body : undefined
        // }
        onClose={toggleDrawer(false)}
        open={open}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        swipeAreaWidth={10}
        // ModalProps={{
        //   keepMounted: true,
        // }}
      >
        <SwipeBox />
      </SwipeableDrawer>
    </>
  );
};

export default ScanAndBuy;

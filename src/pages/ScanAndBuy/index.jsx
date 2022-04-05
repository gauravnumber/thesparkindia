import {
  Close,
  CropSquareSharp,
  HelpCenter,
  HelpCenterRounded,
  HelpCenterOutlined,
} from "@mui/icons-material";

import { Camera } from "react-camera-pro";
import { useState, useRef } from "react";
import {
  Typography,
  Stack,
  IconButton,
  Box,
  SwipeableDrawer,
  GlobalStyles,
} from "@mui/material";
import SwipeBox from "./SwipeBox";

const ScanAndBuy = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* <GlobalStyles
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            // height: `calc(50% - 56px)`,
            // height: open ? `unset` : `calc(50% - 56px)`,
            // overflow: "visible",
          },
        }}
      /> */}
      {/* <Stack direction="row" justifyContent="space-between">
        <p>one</p>
        <p>two</p>
        <p>three</p>
      </Stack> */}
      {/* <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}> */}
      <Camera ref={camera} />
      {/* </Box> */}
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
        alignItems="center"
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
            width: 106,
            height: 25,
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
          <HelpCenterOutlined />
          {/* <HelpCenterRounded /> */}
          {/* <HelpCenter /> */}
        </IconButton>
      </Stack>

      <Box
        sx={{
          width: 274,
          // height: 276,
          height: 376,
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
        <Camera ref={camera} />
      </Box>
      {/* <button onClick={() => setImage(camera.current.takePhoto())}>
        Take Photo{" "}
      </button>
      <img src={image} /> */}
      {/* <button onClick={() => toggleDrawer(setOpen((value) => !value))}>
        toggle
      </button> */}
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
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SwipeBox />
      </SwipeableDrawer>
    </>
  );
};

export default ScanAndBuy;

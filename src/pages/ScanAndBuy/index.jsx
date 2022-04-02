import { useState } from "react";
import { SwipeableDrawer, GlobalStyles } from "@mui/material";
import SwipeBox from "./SwipeBox";

const ScanAndBuy = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            // height: `calc(50% - 56px)`,
            // height: open ? `unset` : `calc(50% - 56px)`,
            // overflow: "visible",
          },
        }}
      />
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

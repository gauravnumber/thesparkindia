import { useState } from "react";
import { Image } from "mui-image";
import {
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
  Avatar,
  Paper,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import CategoriePanel from "./CategoriePanel";
import CategoryTab from "./CategoryTab";

const ExploreTabs = () => {
  const [value, setValue] = useState(0);
  const items = ["Fashion & Style", "Electronics", "Accessories"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const lightRed = "rgba(217, 0, 0, 0.15)";
  // const boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.25)";

  return (
    <>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          mt: 1,
          // ml: 1,
          // p: 1,
          // height: 100,
          "& .MuiTabs-flexContainer": {
            gap: "15px",
          },
          ".MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {items.map((item, index) => (
          <CategoryTab
            key={index}
            label={
              <Typography
                noWrap
                sx={{
                  fontSize: "11px",
                  fontWeight: 700,
                  // letterSpacing: "-0.02em",
                }}
              >
                {item}
                {/* Fasion and Styles */}
              </Typography>
            }
            icon={
              <Avatar
                variant="square"
                alt={item}
                src={`https://source.unsplash.com/26x26?${item}&sig=${index}`}
                sx={{
                  border: "0.2px solid #000",
                  borderRadius: "2px",

                  "&.MuiAvatar-square": {
                    width: 26,
                    height: 26,
                  },
                }}
              />
            }
          />
        ))}
        {/* <CategoryTab
          label={
            <Typography
              noWrap
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                // letterSpacing: "-0.02em",
              }}
            >
              Fasion and Styles
            </Typography>
          }
          icon={
            <Avatar
              variant="square"
              alt="Electronic"
              // src={`https://source.unsplash.com/26x26?sig=${index}`}
              sx={{
                border: "0.2px solid #000",
                borderRadius: "2px",

                "&.MuiAvatar-square": {
                  width: 26,
                  height: 26,
                },
              }}
            />
          }
        /> */}
      </Tabs>
      <CategoriePanel value={value} index={0}>
        <ImageList
          variant="quilted"
          cols={3}
          //  rowHeight={121}
        >
          {Array.from(Array(21)).map((_, index) => (
            <ImageListItem key={index}>
              <Image
                src={`https://source.unsplash.com/100x100?${items[0]}&sig=${index}`}
                showLoading
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CategoriePanel>
      <CategoriePanel value={value} index={1}>
        <ImageList
          variant="quilted"
          cols={3}
          //  rowHeight={121}
        >
          {Array.from(Array(21)).map((_, index) => (
            <ImageListItem key={index}>
              <Image
                src={`https://source.unsplash.com/100x100?${items[1]}&sig=${index}`}
                showLoading
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CategoriePanel>
      <CategoriePanel value={value} index={2}>
        <ImageList
          variant="quilted"
          cols={3}
          //  rowHeight={121}
        >
          {Array.from(Array(21)).map((_, index) => (
            <ImageListItem key={index}>
              <Image
                src={`https://source.unsplash.com/100x100?${items[2]}&sig=${index}`}
                showLoading
                // duration={1000}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CategoriePanel>
    </>
    // <Stack direction="row" spacing="15px" sx={{ p: 1, overflowY: "scroll" }}>
    //   {Array.from(Array(6)).map((_, index) => (
    //     <Stack
    //       key={index}
    //       sx={{
    //         p: 1,
    //         // border: "0.4px solid #000",
    //         backgroundColor: lightRed,
    //         borderRadius: "4px",
    //         boxShadow,
    //       }}
    //       direction="row"
    //       alignItems="center"
    //       spacing="5px"
    //     >
    //       <Avatar
    //         variant="square"
    //         alt="Electronic"
    //         src={`https://source.unsplash.com/26x26?sig=${index}`}
    //         sx={{
    //           border: "0.2px solid #000",
    //           borderRadius: "2px",

    //           "&.MuiAvatar-square": {
    //             width: 26,
    //             height: 26,
    //           },
    //         }}
    //       />
    //       <Typography
    //         noWrap
    //         sx={{
    //           fontSize: "11px",
    //           fontWeight: 700,
    //           // letterSpacing: "-0.02em",
    //         }}
    //       >
    //         Fasion and Styles
    //       </Typography>
    //     </Stack>
    //   ))}
    // </Stack>
  );
};

export default ExploreTabs;

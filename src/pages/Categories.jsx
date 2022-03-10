import { useState } from "react";
import {
  Stack,
  GlobalStyles,
  Divider,
  Avatar,
  styled,
  // ListSubheader,
  Box,
  Tab,
  Tabs,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import CategoriePanel from "@/components/CategoriePanel";
import CategoryTab from "@/components/CategoryTab";
// import CategoriePanel from "../components/CategoriePanel";

const Categories = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        // flexGrow: 1,
        display: "flex",
        // flexDirection: "column",
        bgcolor: "background.paper",
        // p: 2,
        mx: -1,
        my: -3,

        // height: 224,
      }}
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#fff" },
        }}
      />
      {/* <Stack direction="column"> */}
      {/* <Divider
          textAlign="left"
          //  flexItem
        >
          Popular
        </Divider> */}
      {/* <Stack direction="row"> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // TabScrollButtonProps={{ left: 0 }}
        // TabIndicatorProps={{ left: 0 }}
        // sx={{ borderLeft: 1, borderColor: "divider" }}
        sx={{
          "& .MuiSvgIcon-root": {
            width: 22,
            height: 22,
          },
          ".MuiTabs-indicator": {
            left: 0,
          },
          "& .MuiTab-root": {
            bgcolor: "#e1eeff",
            mb: "1px",
          },

          "& .Mui-selected": {
            color: "#004aad",
            // opacity: 0.33,
            bgcolor: "white",
            // mb: 4,
          },

          // bgcolor: "#e1eeff",
        }}
      >
        <CategoryTab
          label="Popular"
          icon={<EmojiEventsOutlinedIcon />}
          sx={{ minWidth: "unset" }}
        />
        <CategoryTab label="Item Two" />
        <CategoryTab label="Item Three" />
        <CategoryTab label="Item Four" />
        <CategoryTab label="Item Five" />
        <CategoryTab label="Item Six" />
        <CategoryTab label="Item Seven" />
      </Tabs>
      <CategoriePanel value={value} index={0}>
        <ImageList
        // cols={3}
        // gap={10}
        // sx={{ width: 500, height: 450 }}
        // sx={{
        //   "&.MuiImageListItemBar-title": {
        //     whiteSpace: "wrap",
        //   },
        // }}
        >
          {/* <Divider /> */}
          {/* <ImageListItem
            key="divider"
            //  cols={1}
          >
            <Divider /> */}
          {/* <Divider
              // textAlign="left"
              sx={{
                width: "100%",
                // width: "114px",
                // width: "214px",
              }}
              // flexItem
            >
              Popular
            </Divider> */}
          {/* </ImageListItem> */}
          {/* <Divider
            // component={ImageListItem}
            textAlign="left"
          /> */}

          <ImageListItem
            key="popular"
            cols={3}
            sx={{
              my: 2,
              "& .MuiDivider-wrapper": {
                pl: 0,
              },
              "& .MuiDivider-root": {
                // color: "#e4e4e4",
                fontSize: (theme) => theme.typography.pxToRem(13),
                // lineHeight: (theme) => theme.typography.pxToRem(15),
              },
              "& .MuiDivider-root::before": {
                width: 0,
              },
            }}
          >
            <Divider
              textAlign="left"
              sx={{
                color: "#8e8e8e",
              }}
            >
              Popular
            </Divider>
          </ImageListItem>

          <ImageListItem
            key="subheader"
            cols={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              // my: -6,
              // "& .MuiImageList-root": {
              //   mt: 0,
              //   color: "red",
              // },
            }}
          >
            <ListSubheader
              component="div"
              // color={(theme) => theme.palette.primary.main}
              sx={{
                color: (theme) => theme.palette.text.primary,
                p: 0,
                lineHeight: (theme) => theme.typography.pxToRem(24),
              }}
            >
              All Popular
            </ListSubheader>
            <IconButton size="small" sx={{ mr: 0.5 }}>
              <FilterAltOutlinedIcon
                sx={{
                  // "& .MuiSvgIcon-root": {
                  width: 19,
                  height: 19,
                  // },
                }}
              />
            </IconButton>
            {/* <b>heading</b> */}
          </ImageListItem>

          {Array.from(Array(10)).map((_, index) => (
            <ImageListItem
              key={index}
              sx={{
                width: 80,
                height: 114,
                // borderRadius: 12,
                // "&.MuiImageListItemBar-title": {
                //   whiteSpace: "wrap",
                // },
              }}
            >
              <img
                src="https://source.unsplash.com/80x83?shoes"
                // width="10"
                // src={`${item.img}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="Random alt"
                // loading="lazy"
                style={{
                  // borderRadius: "unset",
                  borderRadius: 5,
                  // borderRadius: (theme) => theme.shape.borderRadius,
                }}
              />
              <ImageListItemBar
                title="Popular shoes for women"
                // title={item.title}
                // subtitle={item.author}
                position="below"
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  ".MuiImageListItemBar-title": {
                    fontWeight: "fontWeightRegular",
                    whiteSpace: "unset",
                    height: (theme) => theme.typography.pxToRem(26),
                    fontSize: (theme) => theme.typography.pxToRem(11),
                    lineHeight: (theme) => theme.typography.pxToRem(12.89),
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CategoriePanel>
      <CategoriePanel value={value} index={1}>
        Item Two
      </CategoriePanel>
      <CategoriePanel value={value} index={2}>
        Item Three
      </CategoriePanel>
      <CategoriePanel value={value} index={3}>
        Item Four
      </CategoriePanel>
      <CategoriePanel value={value} index={4}>
        Item Five
      </CategoriePanel>
      <CategoriePanel value={value} index={5}>
        Item Six
      </CategoriePanel>
      <CategoriePanel value={value} index={6}>
        Item Seven
      </CategoriePanel>
      {/* </Stack>
      </Stack> */}
    </Box>
  );
};

export default Categories;

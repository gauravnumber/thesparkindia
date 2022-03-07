import { useState } from "react";
import {
  GlobalStyles,
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

import CategoriePanel from "@/components/CategoriePanel";
import CategorieTab from "@/components/CategorieTab";
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
        bgcolor: "background.paper",
        // p: 2,
        m: -1,

        // height: 224,
      }}
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#fff" },
        }}
      />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // TabScrollButtonProps={{ left: 0 }}
        // TabIndicatorProps={{ left: 0 }}
        // sx={{ borderLeft: 1, borderColor: "divider" }}
        sx={{
          ".MuiTabs-indicator": {
            left: 0,
          },
        }}
      >
        <CategorieTab
          label="Popular"
          icon={<EmojiEventsOutlinedIcon />}
          sx={{ minWidth: "unset" }}
        />
        <CategorieTab label="Item Two" />
        <CategorieTab label="Item Three" />
        <CategorieTab label="Item Four" />
        <CategorieTab label="Item Five" />
        <CategorieTab label="Item Six" />
        <CategorieTab label="Item Seven" />
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
          <ImageListItem
            key="subheader"
            cols={3}
            sx={
              {
                // my: -6,
                // "& .MuiImageList-root": {
                //   mt: 0,
                //   color: "red",
                // },
              }
            }
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
            {/* <b>heading</b> */}
          </ImageListItem>
          {Array.from(Array(10)).map((_, index) => (
            <ImageListItem
              key={index}
              sx={{
                width: 83,
                // borderRadius: 12,
                // "&.MuiImageListItemBar-title": {
                //   whiteSpace: "wrap",
                // },
              }}
            >
              <img
                src="https://source.unsplash.com/83x80"
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
                title="Random text"
                // title={item.title}
                // subtitle={item.author}
                position="below"
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  ".MuiImageListItemBar-title": {
                    fontWeight: "fontWeightRegular",
                    whiteSpace: "unset",
                    fontSize: (theme) => theme.typography.pxToRem(11),
                    lineHeight: (theme) => theme.typography.pxToRem(12.89),
                  },
                  // ".MuiImageListItemBar-titleWrap &.MuiImageListItemBar-title":
                  //   {
                  //     whiteSpace: "wrap",
                  //   },
                  // whiteSpace: "break-spaces",
                  // wordWrap: "nowrap",
                  // borderRadius: (theme) => theme.shape.borderRadius,
                }}
                // actionPosition="right"
                // actionIcon={
                //   <IconButton
                //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                //     aria-label={`info about ${item.title}`}
                //   >
                //     <InfoIcon />
                //   </IconButton>
                // }
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
    </Box>
  );
};

export default Categories;

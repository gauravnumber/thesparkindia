import { useState } from "react";
import {
  styled,
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

import CategoriePanel from "../components/CategoriePanel";

const Categories = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CategorieTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    padding: 0,
    // minWidth: `${theme.typography.pxToRem(80)}`,
  }));

  // const itemData = [
  //   {
  //     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  //     title: "Breakfast",
  //     author: "@bkristastucchio",
  //     rows: 2,
  //     cols: 2,
  //     featured: true,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  //     title: "Burger",
  //     author: "@rollelflex_graphy726",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  //     title: "Camera",
  //     author: "@helloimnik",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  //     title: "Coffee",
  //     author: "@nolanissac",
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  //     title: "Hats",
  //     author: "@hjrc33",
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  //     title: "Honey",
  //     author: "@arwinneil",
  //     rows: 2,
  //     cols: 2,
  //     featured: true,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //     title: "Basketball",
  //     author: "@tjdragotta",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //     title: "Fern",
  //     author: "@katie_wasserman",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //     title: "Mushrooms",
  //     author: "@silverdalex",
  //     rows: 2,
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //     title: "Tomato basil",
  //     author: "@shelleypauls",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //     title: "Sea star",
  //     author: "@peterlaster",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //     title: "Bike",
  //     author: "@southside_customs",
  //     cols: 2,
  //   },
  // ];

  return (
    <Box
      sx={{
        // flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        // height: 224,
      }}
    >
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
        <CategorieTab label="Popular" sx={{ minWidth: "unset" }} />
        <CategorieTab label="Item Two" />
        <CategorieTab label="Item Three" />
        <CategorieTab label="Item Four" />
        <CategorieTab label="Item Five" />
        <CategorieTab label="Item Six" />
        <CategorieTab label="Item Seven" />
      </Tabs>
      <CategoriePanel value={value} index={0}>
        <ImageList
          cols={3}
          // gap={10}
          // sx={{ width: 500, height: 450 }}
          // sx={{
          //   "&.MuiImageListItemBar-title": {
          //     whiteSpace: "wrap",
          //   },
          // }}
        >
          {Array.from(Array(10)).map((_, index) => (
            <ImageListItem
              key={index}
              sx={{
                width: 70,
                // borderRadius: 12,
                // "&.MuiImageListItemBar-title": {
                //   whiteSpace: "wrap",
                // },
              }}
            >
              <img
                src="https://source.unsplash.com/10x10"
                // width="10"
                // src={`${item.img}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="Random alt"
                loading="lazy"
                style={{
                  borderRadius: 12,
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

import {
  SearchOutlined,
  RadioButtonChecked,
  RadioButtonUnchecked,
  CheckCircle,
} from "@mui/icons-material";
import {
  GlobalStyles,
  Radio,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const ChooseYourLanguage = () => {
  const blueColor = "#2847a1";
  const greyColor = "#686868";
  const ashColor = "#999898";
  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "English",
    "English",
    "English",
    "English",
    "English",
  ];

  return (
    <Box sx={{ p: 1 }}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Typography
        sx={{
          color: blueColor,
          fontWeight: 600,
          fontSize: "48.5px",
          lineHeight: "124%",
        }}
      >
        Choose
      </Typography>
      <Typography
        sx={{
          color: greyColor,
          fontWeight: 600,
          fontSize: "48.5px",
          lineHeight: "124%",
          mb: "27px",
        }}
      >
        your language
      </Typography>
      <TextField
        placeholder="Search for a language"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <List>
        {languages.map((language, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
            secondaryAction={
              <Checkbox
                // <Radio
                sx={{
                  color: "primary.red",
                  borderRadius: 5,
                  "&.Mui-checked": {
                    color: "primary.red",
                  },
                }}
                icon={<RadioButtonUnchecked fontSize="small" />}
                checkedIcon={<CheckCircle fontSize="small" />}
              />
            }
          >
            {/* <ListItemButton> */}
            <ListItemText
              primary={language}
              primaryTypographyProps={{ color: ashColor, fontSize: "21.5px" }}
            />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        fullWidth
        sx={{
          p: 1.5,
          mt: 3,
          backgroundColor: blueColor,
        }}
      >
        CONTINUE
      </Button>
    </Box>
  );
};

export default ChooseYourLanguage;

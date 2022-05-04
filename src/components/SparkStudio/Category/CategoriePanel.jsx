import { Box, Typography } from "@mui/material";

export default function CategoriePanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
        //  sx={{ px: 1 }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

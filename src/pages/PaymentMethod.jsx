import { Paper, Stack, Typography, styled } from "@mui/material";

import { red } from "@mui/material/colors";

const PaymentMethod = () => {
  const Img = styled("img")`
    width: 100px;
    height: 100px;
  `;

  return (
    <>
      <Paper elevation={3} sx={{ p: 2, borderRadius: "12px" }}>
        <Typography color="text.secondary" gutterBottom>
          Credit / Debit Card (0)
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Img src="https://source.unsplash.com/100x100" />
          <Typography
            color={red[400]}
            // color="red"
            variant="subtitle2"
            component="div"
          >
            + Add New Card
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default PaymentMethod;

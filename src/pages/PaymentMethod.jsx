import { Paper, Stack, Typography, styled } from "@mui/material";

import { red } from "@mui/material/colors";

const PaymentMethod = () => {
  const Img = styled("img")`
    width: 100px;
    height: 90px;
  `;

  const paymentMethod = [
    {
      name: "Credit / Debit Card (0)",
      addMessage: "+ Add New Card",
    },
    {
      name: "Bank Account (0)",
      addMessage: "+ Add Bank Account",
    },
    {
      name: "UPI Virtual Payment Address (0)",
      addMessage: "+ Add UPI Virtual Payment Address",
    },
  ];

  return (
    <>
      <Stack direction="column" spacing={2}>
        {paymentMethod.map((payment, index) => (
          <Paper
            key={index + payment.name}
            elevation={3}
            sx={{ px: 2, py: 1, borderRadius: "12px" }}
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
              component="div"
              gutterBottom
            >
              {payment.name}
              {/* Credit / Debit Card (0) */}
            </Typography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Img src="https://source.unsplash.com/100x100" alt="Random" />
              <Typography
                color={red[400]}
                // color="red"
                variant="subtitle2"
                component="div"
              >
                {payment.addMessage}
                {/* + Add New Card */}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
      {/* <Paper elevation={3} sx={{ p: 2, borderRadius: "12px" }}>
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
      </Paper> */}
    </>
  );
};

export default PaymentMethod;

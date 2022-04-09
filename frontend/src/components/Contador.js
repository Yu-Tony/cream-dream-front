import { useState } from "react";

import { Box, Typography, Icon, Button } from "@mui/material";

import { clamp } from "../utils";

const iconStyle = {
  color: "primary.dark",
  fontSize: "1.3rem",
  fontWeight: "700",
};

function Contador({ bgcolor, justifyContent }) {
  const [piezas, setPiezas] = useState(1);

  const handleOnClick = (value) =>
    setPiezas((prev) => clamp(prev + value, 0, 100));

  return (
    <Box
      width="fit-content"
      sx={{ display: "flex", bgcolor: bgcolor }}
      justifyContent={justifyContent}
    >
      <Button onClick={() => handleOnClick(1)}>
        <Icon sx={iconStyle}>add</Icon>
      </Button>

      <Typography variant="h6">{piezas}</Typography>

      <Button onClick={() => handleOnClick(-1)}>
        <Icon sx={iconStyle}>remove</Icon>
      </Button>
    </Box>
  );
}

export default Contador;

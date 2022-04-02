import { Button, Typography, Box } from "@mui/material";

const botonStyle = {
  borderColor: "text.primary",
  color: "text.primary",
};

const boxStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "3px",
  right: "6px",
};

function Boton({ children, bgcolor }) {
  return (
    <Box position="relative" width="fit-content" margin="0 auto">
      <Box sx={boxStyle} bgcolor={bgcolor}></Box>
      <Button sx={botonStyle} variant="outlined">
        {children}
      </Button>
    </Box>
  );
}

export default Boton;

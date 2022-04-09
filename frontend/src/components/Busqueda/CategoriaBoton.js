import { Chip } from "@mui/material";

function CategoriaBoton({ sx, label }) {
  return (
    <Chip
      label={label}
      size="small"
      variant="categoria"
      sx={{ color: "common.white", ...sx }}
      onClick={() => {
        alert(label);
      }}
    />
  );
}

export default CategoriaBoton;

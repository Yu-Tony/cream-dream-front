import { Chip } from "@mui/material";

function CategoriaBoton({ sx, key, label, onClick }) {
  return (
    <Chip
      label={label}
      size="small"
      variant="categoria"
      sx={{ color: "common.white", ...sx }}
      onClick={() => {
        onClick(label);
      }}
    />
  );
}

export default CategoriaBoton;

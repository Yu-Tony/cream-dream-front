import {
  Box,
  TextField,
  FormControl,
  InputAdornment,
  Icon,
} from "@mui/material";

const inputFontSize = "1.5rem";

function BarraBusqueda({ sx, value, onChange }) {
  return (
    <Box sx={{ textAlign: "center", ...sx }}>
      <FormControl fullWidth>
        <TextField
          variant="standard"
          label="Buscar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
            style: { fontSize: inputFontSize },
          }}
          InputLabelProps={{ style: { fontSize: inputFontSize } }}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
}

export default BarraBusqueda;

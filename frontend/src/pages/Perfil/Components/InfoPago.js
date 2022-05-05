import React from "react";

import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel } from "@mui/material";

import Boton from "../../../components/Carrito/Boton";

import { StyledTextField, labelStyle } from "../styles";

function InfoPago(props) {
  const [infoPago, setInfoPago] = React.useState(false);
  const [local, setLocal] = React.useState("");

  const handleChangeSelect = (event) => {
    setLocal(event.target.value);
  };
  return (
    <form>
      <Typography sx={{ color: "text.primary" }} variant="h4">
        Información de Pago
      </Typography>

      <Grid container>
        {/*NOMBRE DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>Pago</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="tajeta"
                control={<Radio />}
                label="Tarjeta"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/*CATEGORIAS DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>Tipo</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <Select
              value={local}
              onChange={handleChangeSelect}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>Número</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              type="number"
              id="DescripcionComida"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Grid>

        {/*DESCRIPCION DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>Nombre</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              id="correoEmpleado"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Grid>

        {/*OPCIONES DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>Valido hasta</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <Grid container>
            <Grid item xs={6} p={"10px"}>
              <FormLabel sx={labelStyle}>Mes</FormLabel>
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                type="number"
                id="DescripcionComida"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6} p={"10px"}>
              <FormLabel sx={labelStyle}>Año</FormLabel>
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                type="number"
                id="DescripcionComida"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/*DESCRIPCION DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={labelStyle}>CCV</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField id="nameSign" InputLabelProps={{ shrink: true }} />
          </FormControl>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Button p={0}>
              <Boton bgcolor="secondary.main">Guardar</Boton>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default InfoPago;

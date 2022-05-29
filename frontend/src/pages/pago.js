/*--------------------------IMPORTS--------------------- */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Divider, Slider, Select } from "@mui/material";
import {
  Button,
  Grid,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  Rating,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";

import FavoriteIcon from "@mui/icons-material/Favorite";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel } from "@mui/material";

import Boton from "../components/Carrito/Boton";

import { CarritoContext } from "../contexts/Carrito";

import { calcularSubtotal } from "../utils";

import "./css/menu.css";

/*--------------------------Marcas para slider--------------------- */
const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 20,
    label: "20%",
  },
];

export default function Pago() {
  const [value, setValue] = useState(0);
  const [NumeroPersonas, setNumeroPersonas] = useState(1);
  const [propina, setPropina] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { stateCarrito } = useContext(CarritoContext);

  const handleChange = (event) => {
    setNumeroPersonas(event.target.value);
  };

  function valuetext(value) {
    setPropina((calcularSubtotal(stateCarrito.comidas) * value) / 100);
    return `${value}`;
  }

  const handleOnClickPagar = () => {
    setOpenModal(true);
  };

  /*--------------------------RETURN--------------------- */

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{ bgcolor: "background.main", p: 6 }}
    >
      {/* CARTA DE COMIDA PEDIDA */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={5}
        sx={{ justifyContent: "center" }}
      >
        <Box
          item
          xs={12}
          sx={{ bgcolor: "white", boxShadow: "-20px 20px #efd3c3" }}
        >
          <Grid textAlign={"center"} sx={{ paddingBottom: 2, p: 4 }}>
            <Typography class="title" variant="h1">
              CREAM DREAM
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              paddingLeft: 4,
              paddingRight: 4,
              paddingBottom: 1,
              justifyContent: "center",
              color: "#644838",
            }}
          >
            <Grid item xs={6}>
              <Typography>Producto</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Unidad</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Precio</Typography>
            </Grid>
          </Grid>

          <Divider
            variant="middle"
            style={{ background: "#644838", borderBottomWidth: 3 }}
          />

          <Grid container className="itemsPago" pt={3}>
            {stateCarrito.comidas.map((comida, index) => (
              <>
                <Grid
                  key={index}
                  container
                  className="itemPago"
                  sx={{
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingBottom: 1,
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <Typography>{comida.nombre}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>{comida.cantidad}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>${comida.precio * comida.cantidad}</Typography>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>

          <Divider
            variant="middle"
            style={{ background: "#644838", borderBottomWidth: 3 }}
          />

          <Grid
            container
            textAlign={"center"}
            sx={{ paddingBottom: 2, paddingLeft: 5, paddingRight: 5 }}
          >
            <Grid item xs={9}>
              <Typography class="title" variant="h3">
                SUBTOTAL:{" "}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography class="title" variant="h3">
                ${calcularSubtotal(stateCarrito.comidas)}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container p={5}>
          <Grid item xs={12}>
            <Typography class="title" variant="h2">
              Propina
            </Typography>

            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              max={20}
            />

            <TextField
              sx={{ padding: 2 }}
              id="propina-text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
                readOnly: true,
              }}
              value={propina}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* ESPACIO */}
      <Grid item md={"none"} lg={2} sx={{ justifyContent: "center" }}></Grid>

      {/* SEPARAR CUENTA */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={5}
        sx={{ justifyContent: "center" }}
      >
        <Grid container>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h1" class="title">
              Separar cuenta en:
            </Typography>
            <FormControl style={{ minWidth: 400 }}>
              <Select
                value={NumeroPersonas}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>1 persona</MenuItem>
                <MenuItem value={2}>2 personas</MenuItem>
                <MenuItem value={3}>3 personas</MenuItem>
                <MenuItem value={4}>4 personas</MenuItem>
                <MenuItem value={5}>5 personas</MenuItem>
                <MenuItem value={6}>6 personas</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} pt={4} px={6}>
            <Box
              sx={{
                border: 1,
                borderRadius: "6px",
                borderColor: "text.primary",
              }}
            >
              <Grid container textAlign={"center"} p={2}>
                <Grid item xs={6}>
                  {" "}
                  <Typography>Personas</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Cantidad</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{NumeroPersonas}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    $
                    {(calcularSubtotal(stateCarrito.comidas) + propina) /
                      NumeroPersonas}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} pt={4} px={6}>
            <Grid
              container
              textAlign={"center"}
              sx={{ paddingBottom: 2, paddingLeft: 5, paddingRight: 5 }}
            >
              <Grid item xs={9}>
                <Typography class="title2" variant="h1">
                  TOTAL:{" "}
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography class="title2" variant="h1">
                  ${calcularSubtotal(stateCarrito.comidas) + propina}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} pt={1} px={6}>
            <Divider
              variant="middle"
              style={{ background: "#644838", borderBottomWidth: 4 }}
            />
          </Grid>

          <Grid item xs={12} p={2}>
            <Typography variant="h3" class="title">
              Método de pago
            </Typography>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="efectivo"
                control={<Radio />}
                label="Efectivo"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
            </RadioGroup>
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
                <Boton bgcolor="primary.main" onClick={handleOnClickPagar}>
                  Pagar
                </Boton>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Modal open={openModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.main",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Gracias por su compra
          </Typography>
          <Typography>
            <FavoriteIcon color="primary" />
          </Typography>

          <Link to="/">Ir a Home</Link>
        </Box>
      </Modal>

      {/* COMENTARIO */}
      {/*<Grid item xs={12} sm={12} pt={5} sx={{ justifyContent: "center" }}>
        <Divider
          variant="middle"
          style={{ background: "#FA8466", borderBottomWidth: 5 }}
        />

        <Grid container textAlign={"center"} p={5}>
          <Grid item xs={"none"} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <Typography>Calificación</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography>Comentario</Typography>

            <TextField
              placeholder="Escribe un comentario acerca de tu experiencia en la sucursal"
              minRows={3}
              fullWidth
              multiline
            />

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Button p={0}>
                  <Boton bgcolor="primary.main">Enviar</Boton>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={"none"} lg={3}></Grid>
        </Grid>
      </Grid>*/}
    </Grid>
  );
}

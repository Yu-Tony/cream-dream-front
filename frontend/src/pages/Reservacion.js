import React, { useState } from "react";
import "../App.css";
import {
  Box,
  CssBaseline,
  Typography,
  TextField,
  Container,
  FormControl,
  Button,
  InputLabel,
  Select,
  Divider,
  Modal,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MenuItem } from "@mui/material/";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import QR from "./Images/QR.png"

const theme = createTheme({
  palette: {
    primary: {
      main: "#644838",
    },
    secondary: {
      main: "#FA8466",
    },
    background: {
      default: "#FEEEE5",
    },
  },
  typography: {
    fontFamily: "Outfit",
  },
});

export default function Reservacion() {
  const [Reservacion, setReservacion] = useState({
    Personas: null,
    Fecha: null,
    Hora: null,
    Sucursal: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [openQR, setOpenQR] = React.useState(false);
  const handleOpenQR = (event) => {
    setOpen(false);
    setOpenQR(true);
  };
  const handleCloseQR = () =>  setOpenQR(false);

  const onSubmitReservacion = (event) => {
    event.preventDefault();
    setOpen(true);
  };



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setReservacion({
      ...Reservacion,
      [name]: value,
    });
  };

  const handleChangeDate = (newValue) => {
    setReservacion({
      ...Reservacion,
      Fecha: newValue,
    });
  };

  const handleChangeHour = (newValue) => {
    setReservacion({
      ...Reservacion,
      Hora: newValue,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="backgroundColorReserv"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "Wrap",
          justifyContent: "center",
          mt: 12,
          borderBottom: 15,
          borderColor: "#efd3c3 ",
        }}
      >
        <Box sx={{ width: "38%", mt: 15 }}>
          <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
            HAZ TU <br />
            RESERVACIÓN
          </Typography>

          <Divider
            sx={{
              border: 7,
              borderRadius: 10,
              borderColor: "secondary.main",
              mt: 2,
            }}
          />

          <Typography variant="h3" color="primary" sx={{ mt: 2 }}>
            Que no te coma el tiempo, <br />
            reserva y no te quedes <br />
            sin mesa.
          </Typography>
        </Box>
        <Box sx={{ width: "7%" }}></Box>
        <Box
          sx={{
            width: "28%",
          }}
        >
          <Container sx={{ bgcolor: "#FFFFFF", mt: 5, mb: 5, borderRadius: 1 }}>
            <form onSubmit={onSubmitReservacion}>
              <FormControl fullWidth sx={{ mt: 5, minWidth: 120 }}>
                <InputLabel>Número de Personas</InputLabel>
                <Select
                  required
                  value={Reservacion.Personas}
                  name="Personas"
                  label="Número de Personas"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1 Persona</MenuItem>
                  <MenuItem value={2}>2 Personas</MenuItem>
                  <MenuItem value={3}>3 Personas</MenuItem>
                  <MenuItem value={4}>4 Personas</MenuItem>
                  <MenuItem value={5}>5 Personas</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 5, minWidth: 120 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Fecha"
                    name="Fecha"
                    inputFormat="dd/MM/yyyy"
                    value={Reservacion.Fecha}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                    required
                  />
                </LocalizationProvider>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 5, minWidth: 120 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Hora"
                    name="Hora"
                    value={Reservacion.Hora}
                    onChange={handleChangeHour}
                    renderInput={(params) => <TextField {...params} />}
                    required
                  />
                </LocalizationProvider>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 5, minWidth: 120 }}>
                <InputLabel>Sucursal</InputLabel>
                <Select
                  value={Reservacion.Sucursal}
                  name="Sucursal"
                  label="Sucursal"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value={"Villa de Santiago"}>
                    Villa de Santiago
                  </MenuItem>
                  <MenuItem value={"Cumbres"}>Cumbres</MenuItem>
                  <MenuItem value={"Pueblo Serena"}>Pueblo Serena</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mt: 5, mb: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "50%", bgcolor: "#FA8466 " }}
                  >
                    Buscar disponibilidad
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Container>
        </Box>
      </Box>
      <Modal open={open} >
        <Box sx={style}>
          <Box sx={{ bgcolor: "#FA8466" }}>
            <Container>
              <Typography
                variant="h2"
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Mesas Disponibles
              </Typography>
            </Container>
          </Box>
          <Container sx={{ mt: 3, mb: 3 }}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              En el horario, sucursal, y con el número de personas seleccionado,
              se encuentran 5 mesas disponibles
            </Typography>

            <Typography
              id="modal-modal-description"
              variant="h4"
              sx={{ mt: 3 }}
            >
              ¿Desea confirmar su reservación?
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                mt:3
              }}
            >
              <Button
                variant="contained"
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  width: "25%",
                  bgcolor: "#FFFFFF",
                  color: "#644838",
                  borderColor: "#644838",
                  border: 2,
                }}
                onClick={handleClose}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#644838" }}
                >
                  CANCELAR
                </Typography>
              </Button>

              <Button
                variant="contained"
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  ml:3,
                  width: "25%",
                  bgcolor: "#FA8466",
                  color: "#644838",
                  borderColor: "#644838",
                  border: 2,
                }}
                onClick={handleOpenQR}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#FFFFFF" }}
                >
                  ACEPTAR
                </Typography>
              </Button>
            </Box>
          </Container>
        </Box>
      </Modal>
      <Modal open={openQR} >
        <Box sx={style}>
          <Box sx={{ bgcolor: "#FA8466" }}>
            <Container>
              <Typography
                variant="h2"
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Mesas Disponibles
              </Typography>
            </Container>
          </Box>
          <Container sx={{ mt: 0, mb: 3 }}>

          <Box
              sx={{
                display: "flex",
                flexDirection:'row',
                justifyContent: "center",
                
              }}
            >
              <Box sx={{display: "flex",
                flexDirection:'row',
                justifyContent: "center",
                }}>
              <div className="backgroundImageQR">

              </div>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection:'row',
                justifyContent: "center",
                
              }}
            >
              <Button
                variant="contained"
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  ml:3,
                  width: "35%",
                  bgcolor: "#FA8466",
                  color: "#644838",
                  borderColor: "#644838",
                  border: 2,
                }}
                onClick={handleCloseQR}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#FFFFFF" }}
                >
                  DESCARGAR QR
                </Typography>
              </Button>
            </Box>

          </Container>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

  /*--------------------------IMPORTS--------------------- */
  import React, { useState, useEffect } from "react";
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
    Grid
  } from "@mui/material";
  import { createTheme } from "@mui/material/styles";
  import { MenuItem } from "@mui/material/";
  import AdapterDateFns from "@mui/lab/AdapterDateFns";
  import LocalizationProvider from "@mui/lab/LocalizationProvider";
  import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
  import TimePicker from "@mui/lab/TimePicker";
  
  import QRCode from 'qrcode.react';

  import * as API from "../services/Reservacion";
  
    /*--------------------------STYLE--------------------- */
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
  
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  
    bgcolor: "background.paper",
    boxShadow: 24,
  };
  
  
  export default function Reservacion() {
    
      /*--------------------------FUNCIONES--------------------- */
    {/* Arreglo de reservacion */}
      const [Reservacion, setReservacion] = useState({
      Personas: null,
      Fecha: null,
      Hora: null,
      Sucursal: "",
      Mesa: null
    });
  
   {/*Ventanas modales */}
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
  
    const [openQR, setOpenQR] = React.useState(false);
    const [sucursal, setSucursal] = React.useState([]);
    const [mesa, setMesa] = React.useState([]);

    useEffect(()=>{const fetch =async()=>{const res = await API.GetAll()
      setSucursal(res.data)}
      fetch()},[]);

    useEffect(()=>{const fetch =async()=>{const res = await API.GetOne()
      setMesa(res[0].data)}
      fetch()},[]);

    const handleOpenQR = async () => {
    
      Reservacion.Mesa = mesa;
      const res = await API.Create(Reservacion);
      if(res===false)
      {
        
        setOpen(true);
        setOpenQR(false);
      
      }
      else{
        setOpen(false);
        setOpenQR(true);
      }
      console.log(res);

     
    };


 
    const handleCloseQR = () =>  setOpenQR(false);
  
    const [random, setRandom] = React.useState(0);
    const onSubmitReservacion = (event) => {
      event.preventDefault();
      setOpen(true);
      const min = 1;
      const max = 6;
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
      setRandom(Math.floor(Math.random() * (max - min + 1)) + min) ;
      //this.setState({ random: this.state.random + rand });
    };
  
   {/* Handle cambios */}
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
  
   {/* Descargar QR */}
    const downloadQRCode = () => {
      const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      console.log(qrCodeURL)
      let aEl = document.createElement("a");
      aEl.href = qrCodeURL;
      aEl.download = "QR_Code.png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
  
      handleCloseQR();
    }
   
  
  
   /*--------------------------RETURN--------------------- */
    return (
  
      
      <Grid container>
        <CssBaseline />
  
  
            <Grid container sx={{backgroundColor: 'secondary.main'}} mt={10}   alignItems="center" justifyContent="center" >
             {/* ESPACIO */}
              <Grid item lg={0} sm={12} px={10}></Grid>
            
             {/* TEXTO */}
              <Grid item xs={12} md={5} lg={6} px={10}>
                <Typography variant="h3" color="text.primary" sx={{ fontWeight: "bold" }}>
                  HAZ TU <br />
                  RESERVACIÓN
                </Typography>
  
                <Divider
                  sx={{
                    border: 7,
                    borderRadius: 10,
                    borderColor: "primary.main",
                    mt: 2,
                  }}
                />
  
                <Typography variant="h4" color="text.primary" sx={{ mt: 2 }}>
                  Que no te coma el tiempo, <br />
                  reserva y no te quedes <br />
                  sin mesa.
                </Typography>
             
              </Grid>
  
  
              {/* RESERVACION */}
  
              <Grid item xs={12} md={7} lg={5} px={6}> 
                <Grid container sx={{ bgcolor: "#FFFFFF", mt: 5, mb: 5, p:5, borderRadius: 1 }}>
                  <form onSubmit={onSubmitReservacion}>
                  
                  
                    <FormControl fullWidth sx={{ mt: 5}}>
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
                        <MenuItem value={6}>6 Personas</MenuItem>
                      </Select>
                    </FormControl>
                  
  
                
                  <FormControl fullWidth sx={{ mt: 5 }}>
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
  
                  
               
                  <FormControl fullWidth sx={{ mt: 5}}>
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
             
                  
  
                 
                  <FormControl fullWidth sx={{ mt: 5 }}>
                      <InputLabel>Sucursal</InputLabel>

                      <Select
                        value={Reservacion.Sucursal}
                        onChange={handleChange}
                        displayEmpty
                        name="Sucursal"
                        label="Sucursal"
                        inputProps={{ 'aria-label': 'Without label' }}
                        required
                        >
                        {sucursal.map((item,index)=>( <MenuItem key={index} value={item._id}>{item.nombre}</MenuItem>))}

                      </Select>


                      {/*<Select
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
                      </Select> */}
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
                </Grid>
              </Grid>
  
            </Grid>
  
           
  
     
       
        
      
        {/* MODAL DE ESPACIOS DISPONIBLES */}
        <Modal open={open}   style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
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
                  se encuentran  {random} mesas disponibles
                </Typography>
  
                <Typography
                  id="modal-modal-description"
                  variant="h4"
                  sx={{ mt: 3 }}
                >
                  ¿Desea confirmar su reservación?
                </Typography>
  
                <Grid container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    mt:10
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      paddingTop: 2,
                      paddingBottom: 2,
                      width: "40%",
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
                      width: "40%",
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
                  
                </Grid>
  
              </Container>
  
            </Box>
        </Modal>
  
        {/* MODAL DE QR */}
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
                      
                  <div >
  
                
                      <div className="HpQrcode">
                        <QRCode
                        id="qrCodeEl"
                        value={`Personas: ${Reservacion.Personas}, Fecha: ${Reservacion.Fecha}, Hora: ${Reservacion.Hora}, Sucursal: ${Reservacion.Sucursal}`}
                        size={290}
                        level={"H"}
                        includeMargin={true}
                      /></div>
        
  
                 
                  
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
                    type="button" onClick={downloadQRCode}
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
  
      </Grid>
       
  
    );
  }
  
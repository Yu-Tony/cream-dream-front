  /*--------------------------IMPORTS--------------------- */
import React from "react";

import { Divider, Slider, Select } from '@mui/material';
import { Button, Grid ,FormControl, TextField, Typography, InputAdornment, MenuItem, Rating} from "@mui/material"
import { Box } from '@mui/system';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from "@mui/material";

import Boton from "../components/Carrito/Boton";


import "./css/menu.css";

  /*--------------------------Marcas para slider--------------------- */
const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 20,
      label: '20%',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }


export default function Pago()
{

    const [value, setValue] = React.useState(0);
    const [NumeroPersonas, setNumeroPersonas] = React.useState('');

    const handleChange = (event) => {
        setNumeroPersonas(event.target.value);
    };

      /*--------------------------RETURN--------------------- */

    return (
        <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        sx={{bgcolor: 'background.main', p: 6}}  
        >
            {/* CARTA DE COMIDA PEDIDA */}
            <Grid item xs={12} sm={12} md={6} lg={5} sx={{ justifyContent: "center" }}>
                <Box item xs={12} sx={{bgcolor: 'white',  boxShadow: "-20px 20px #efd3c3"}}>

                    <Grid textAlign={'center'} sx={{paddingBottom:2, p:4}}>
                        <Typography class="title"  variant="h1" >CREAM DREAM</Typography>
                    </Grid>

                    <Grid container sx={{ paddingLeft:4, paddingRight: 4, paddingBottom:1, justifyContent: "center", color: "#644838" }}>
                        <Grid item xs={6} ><Typography>Producto</Typography></Grid>
                        <Grid item xs={2} ><Typography>Unidad</Typography></Grid>
                        <Grid item xs={4} ><Typography>Precio</Typography></Grid>
                       
                    </Grid>

                    <Divider variant="middle"  style={{background: '#644838', borderBottomWidth: 3 }}/>

                    <Grid container className="itemsPago" pt={3}>

                        <Grid container className="itemPago" sx={{ paddingLeft:4, paddingRight: 4, paddingBottom:1, justifyContent: "center" }}>
                            <Grid item xs={6} ><Typography>Nombre platillo</Typography></Grid>
                            <Grid item xs={2} ><Typography>1</Typography></Grid>
                            <Grid item xs={4} ><Typography>$500.00</Typography></Grid>
                        </Grid>

                        <Grid container className="itemPago" sx={{ paddingLeft:4, paddingRight: 4, paddingBottom:1, justifyContent: "center" }}>
                            <Grid item xs={6} ><Typography>Nombre platillo</Typography></Grid>
                            <Grid item xs={2} ><Typography>1</Typography></Grid>
                            <Grid item xs={4} ><Typography>$500.00</Typography></Grid>
                        </Grid>
                        
                       
                    </Grid>

                    <Divider variant="middle"  style={{ background: '#644838', borderBottomWidth: 3}}/>

                    <Grid container textAlign={'center'} sx={{paddingBottom:2, paddingLeft: 5, paddingRight: 5}}>
                       <Grid item xs={9}>
                       <Typography class="title"  variant="h3" >SUBTOTAL: </Typography>
                       </Grid>

                       <Grid item xs={2}>
                       <Typography class="title"  variant="h3" >$1000.00 </Typography>
                       </Grid>
                    </Grid>
                   
                </Box>

                <Grid container p={5}>
                    <Grid item xs={12}>
                        <Typography class="title" variant="h2">Propina</Typography>
                    

                        <Slider aria-label="Custom marks" defaultValue={0} getAriaValueText={valuetext} step={1} valueLabelDisplay="auto" marks={marks}   max={20}/>

                        <TextField sx={{ padding: 2 }} id="propina-text" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,  readOnly: true, }} />
                    </Grid>
                </Grid>
              
            </Grid>

            {/* ESPACIO */}
            <Grid item md={'none'} lg={2} sx={{  justifyContent: "center"}}></Grid>
   
           
            {/* SEPARAR CUENTA */}
            <Grid item xs={12} sm={12} md={6} lg={5} sx={{  justifyContent: "center"}}>
                <Grid container>

                    <Grid item xs={12} textAlign={'center'}>
                        <Typography variant="h1" class="title">Separar cuenta en:</Typography>
                            <FormControl style={{minWidth: 400}}> 
                            <Select
                            value={NumeroPersonas}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}>
                                <MenuItem value="">
                                   1 persona
                                </MenuItem>
                                <MenuItem value={20}>2 personas</MenuItem>
                                <MenuItem value={30}>3 personas</MenuItem>
                                <MenuItem value={40}>4 personas</MenuItem>
                                <MenuItem value={50}>5 personas</MenuItem>
                                <MenuItem value={60}>6 personas</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} pt={4} px={6}>
                        <Box sx={{ border: 1, borderRadius: '6px', borderColor: 'text.primary' }}>
                            <Grid container  textAlign={'center'} p={2}>
                                <Grid item xs={6}> <Typography>Personas</Typography></Grid>
                                <Grid item xs={6}><Typography>Cantidad</Typography></Grid>
                                <Grid item xs={6}><Typography>4</Typography></Grid>
                                <Grid item xs={6}><Typography>$200.00</Typography></Grid>
                            </Grid>
                        </Box>
                    </Grid>
                   
                    <Grid item xs={12} pt={4} px={6}>
                        <Grid container textAlign={'center'} sx={{paddingBottom:2, paddingLeft: 5, paddingRight: 5}}>
                            <Grid item xs={9}>
                            <Typography class="title2"  variant="h1" >TOTAL: </Typography>
                            </Grid>

                            <Grid item xs={2}>
                            <Typography class="title2"  variant="h1" >$1000.00 </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} pt={1} px={6}>
                        <Divider variant="middle"  style={{ background: '#644838', borderBottomWidth: 4 }}/>
                    </Grid>
                   
                    <Grid item xs={12} p={2}>
                        <Typography variant="h3" class="title">Método de pago</Typography>
                        <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                            <FormControlLabel value="efectivo" control={<Radio />} label="Efectivo" />
                            <FormControlLabel value="tajeta" control={<Radio />} label="Tarjeta" />
                            <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                                          
                        </RadioGroup>
                    </Grid>

                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Button  p={0} >     
                                <Boton bgcolor="primary.main">Pagar</Boton>
                            </Button>
                        </Grid>
                    </Grid>

                   
                </Grid>
          
               
            </Grid>

            {/* COMENTARIO */}
            <Grid item xs={12} sm={12} pt={5} sx={{  justifyContent: "center"}}>
                <Divider variant="middle"  style={{ background: '#FA8466', borderBottomWidth: 5}}/>

                <Grid container textAlign={'center'} p={5}>
                    <Grid item xs={'none'} lg={3}></Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography>Calificación</Typography>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue);}}/>
                        <Typography>Comentario</Typography>

                        <TextField placeholder="Escribe un comentario acerca de tu experiencia en la sucursal" minRows={3} fullWidth  multiline/>

                        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                            <Grid item>
                                <Button  p={0} >     
                                    <Boton bgcolor="primary.main">Enviar</Boton>
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={'none'} lg={3}></Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}
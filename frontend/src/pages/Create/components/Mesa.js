import React, { useState,useEffect } from "react";
import {Button,Typography,Grid,FormControl,FormLabel,Select,MenuItem,InputAdornment, Alert} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Boton from "../../../components/Carrito/Boton";
import { StyledTextField } from "../styles";

import * as API from "../../../services/Usuario";
import * as API_S from "../../../services/Sucursal";
import * as API_M from "../../../services/Mesa";

 function Mesa()
 {
    const [formErrors, setformErrors] = useState({ });
    const [sucursal, setSucursal] = React.useState([]);
    const [empleado, setEmpleado] = React.useState([]);

    const [data, setData] = useState({
        sillas: 0,
        disponible:true,
        _empleado: null,
        _sucursal:null,
    });

    const [isSubmitMesa, setIsSubmitMesa] = useState(false);

    const handleAlignment = (event, newAlignment) => {
        setData({
            ...data,
            disponible:newAlignment,
        });
    }

    useEffect(()=>{const fetch =async()=>{const res = await API_S.GetAll()
        setSucursal(res.data)}
        fetch()},[]);

        useEffect(()=>{const fetch =async()=>{const res = await API.GetBySucursal(data._sucursal)
            setEmpleado(res.data)}
            fetch()},[data]);

            const handleChangeSelect = (event) => {
                setData({...data,
                    _sucursal:event.target.value
                })
                
            };

            const handleOnChange = (event) => {
                setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
            };

            const handleChangeSelectEmpl = (event) => {
                setData({...data,
                    _empleado:event.target.value
                })
    
                
            };

        const onSubmitMesa = async (event) => {
            event.preventDefault();
            //console.log(data);
             setformErrors(ValidateMesa(data));
             setIsSubmitMesa(true);
            const res = await API_M.Create(data);
            console.log(res);
          };

          const ValidateMesa = (values) =>
          {
            const errors={}
            if(!values.sillas){errors.sillas = "Ingresa un numero de sillas";}
            else if(values.sillas < 1 || values.sillas > 7){errors.sillas = "El numero de sillas debe estar entre 1 y 6";}
            return errors;
          }

     return(  <form>
         <Typography  variant="h4">AGREGAR MESA</Typography>

         <Grid container>

             {/*Numero de sillas*/ }
             <Grid item xs={12} xl={2} p={"10px"}>
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sillas</FormLabel>
                 </FormControl>
             </Grid>
             <Grid item xs={12} xl={10} p={"10px"}>
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <StyledTextField  
                     InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} 
                     type="number" 
                     id="numeroSillas" 
                     name="sillas"
                     InputLabelProps={{ shrink: true }}  
                     onChange={handleOnChange}/>
                    {formErrors.sillas && <Alert severity="error">{formErrors.sillas}</Alert>}       

                 </FormControl>
             </Grid>

             {/*Sucursal de sillas */}
             <Grid item xs={12} xl={2} p={"10px"} >
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sucursal</FormLabel>
                 </FormControl>
             </Grid>
             <Grid item xs={12} xl={10} p={"10px"} >
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <Select
                    value={data._sucursal}
                    onChange={handleChangeSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {sucursal.map((item,index)=>( <MenuItem key={index} value={item._id}>{item.nombre}</MenuItem>))}

                    </Select>
                 </FormControl>
             </Grid>

             {/*Empleado */}
             <Grid item xs={12} xl={2} p={"10px"} >
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Empleado</FormLabel>
                 </FormControl>
             </Grid>
             <Grid item xs={12} xl={10} p={"10px"} >
                 <FormControl fullWidth sx={{ m: 1 }}>
                 <Select
                    value={data._empleado}
                    onChange={handleChangeSelectEmpl}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {empleado.map((item,index)=>( <MenuItem key={index} value={item._id}>{item.nombre} {item.apellido}</MenuItem>))}

                    </Select>
                 </FormControl>
             </Grid>

             {/*Disponible Mesa */}
             <Grid item  xs={12} xl={2} p={"10px"}  >
                 <FormControl fullWidth sx={{ m: 1 }}>
                     <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Disponible</FormLabel>
                 </FormControl>
             </Grid>
             <Grid item  xs={12} xl={10} p={"10px"}  >
                 <FormControl fullWidth sx={{ m: 1 }}>
                 <ToggleButtonGroup
                        color="primary"
                        value={data.disponible}
                        exclusive
                        onChange={handleAlignment}
                        >
                        <ToggleButton value={true}>Si</ToggleButton>
                        <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                 </FormControl>
             </Grid>

             <Button onClick={onSubmitMesa}>     
                <Boton bgcolor="secondary.main" >Guardar</Boton>
            </Button>

         </Grid>
      
     </form>)
   
 }

 export default Mesa;
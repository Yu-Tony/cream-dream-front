import React, { useState } from "react";
import {  withStyles, makeStyles } from "@mui/styles"
import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem} from "@mui/material"
import { Box } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from "@mui/material";

import Boton from "../components/Carrito/Boton";

import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';

  const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];

  
export default function Reportes()
{

    const [month, setMonth] = React.useState('');

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };

    const monthList = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    

    const [year, setYear] = React.useState('');

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };
    const yearList = ['2019','2020', '2021', '2022'];

    const [report, setReport] = React.useState('');

    const handleChangeReport = (event) => {
        setReport(event.target.value);
    };

    const reportList = ['Platillo más vendido','Sucursal con más ventas', 'Venta de empleados'];

    return (



  
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            sx={{bgcolor: '#FEEEE5'}} 
            p={5} 
        >
           
           <Grid container >
      
            
                <Grid item lg={12} p={0}>
                    <Typography  variant="h1" class="title">REPORTES</Typography>
                </Grid>
                
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography> Mes:</Typography>

                        <FormControl sx={{ m: 1, width: 250 }}>
                        <Select
                         MenuProps={{
                            PaperProps: {
                              onScroll: (event: any) => {
                               
                           
                              }
                            },
                            style: { maxHeight: 300 },
                           
                          }}

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={month}
                            onChange={handleChangeMonth}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                        
                        {monthList.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            
                            >
                            {name}
                            </MenuItem>
                        ))}
                        
                        </Select>

                        
                        </FormControl>

                    </Grid>

                    <Grid item  xs={12} sm={6}  md={4} lg={3}>
                        <Typography> Año:</Typography>
                        <FormControl sx={{ m: 1, width: 250 }}>
                        <Select
                         MenuProps={{
                            PaperProps: {
                              onScroll: (event: any) => {
                               
                           
                              }
                            },
                            style: { maxHeight: 300 },
                           
                          }}

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={year}
                            onChange={handleChangeYear}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                        
                        {yearList.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            
                            >
                            {name}
                            </MenuItem>
                        ))}
                        
                        </Select>

                        
                        </FormControl>
                    </Grid>

                    <Grid item  xs={12} sm={6}  md={4} lg={3}>
                    <Typography> Reporte:</Typography>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <Select
                         MenuProps={{
                            PaperProps: {
                              onScroll: (event: any) => {
                               
                           
                              }
                            },
                            style: { maxHeight: 300 },
                           
                          }}

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={report}
                            onChange={handleChangeReport}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                        
                        {reportList.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            
                            >
                            {name}
                            </MenuItem>
                        ))}
                        
                        </Select>

                        
                        </FormControl>
                    </Grid>

                    <Grid item  xs={12} sm={6}  md={4} lg={3}>
                        <Button  p={0} >     
                            <Boton bgcolor="secondary.main">CARGAR</Boton>
                        </Button>
                    </Grid>
                </Grid>

<Grid container pt={5}>
    <Grid item lg={12}>
        <Paper>
        <Chart
        data={data}
        >
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
        </Chart>
    </Paper>
    </Grid>
</Grid>



            </Grid>
       

     



        </Grid>

    )

}
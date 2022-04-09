import React from "react";
import {Card, CardMedia, Typography, Link, Paper, Button, Box, Grid, ThemeProvider, createTheme, Container} from '@mui/material';
import Image from 'mui-image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './css/menu.css';

import Espresso from './images/espresso.jpg';
import Americano from './images/americano.jpg';
import Latte from './images/latte.jpg';
import Cappuccino from './images/cappuccino.jpg';

export default function Home(){

    const theme = createTheme({
        palette: {
            primary: {
                main: "#FA8466",
                dark: "#DE6D71",
        },
            secondary: {
            main: "#FFEFB5",
            secondary: "#FFFFFF",
        },
        background: {
            main: "#FEEEE5",
            dark: "#EFD3C3",
        },
        text: {
            primary: "#644838",
            secondary: "#DE6D71",
            tertiary: "#FA8466",
        },
        },
        typography: {
        fontFamily: "Outfit",
        }
    });
    
    const TyStyProm={ fontSize: 20, color:"#644838", fontWeight:700 };
    const TyStyV5PD9={ fontSize: 25, color:"#DE6D71", fontWeight:900 };
    const TyStyD5P9={ fontSize: 15, color:"#644838", fontWeight:900 };
    const TyStyD2P6={ fontSize: 12, color:"#644838", fontWeight:600 };
    const TyStyD4SS9={ fontSize: 14, color:"#FFFFFF", fontWeight:900 };

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: 'background.main'}}>
                <Box sx={{py:3,  display:'flex', justifyContent:'center'}}>
                    <Box sx={{mx:2}}>
                        <Typography id='Bebidas' style={TyStyProm} sx={{px:1, mx:1, display:'inline', borderBottom:3, borderColor:'primary.dark',
                        textTransform: 'uppercase'}}>Bebidas</Typography>
                        <Typography id='DesaAlmu' style={TyStyProm} sx={{px:1, mx:1, display:'inline', 
                        textTransform: 'uppercase'}}>Desayunos y almuerzos</Typography>
                        <Typography id='Comidas' style={TyStyProm} sx={{px:1, mx:1,display:'inline', 
                        textTransform: 'uppercase'}}>Comidas</Typography>
                        <Typography id='Postres' style={TyStyProm} sx={{px:1, mx:1, display:'inline', 
                        textTransform: 'uppercase'}}>Postres</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box id='BebidasM'>
                        <Box sx={{ml:8}}>
                            <Typography style={TyStyV5PD9} sx={{ textTransform: 'uppercase'}}>
                                Café
                            </Typography>
                        </Box>
                        <Box sx={{pb:4}}>
                            <Grid container sx={{mx:2}}>
                                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                                    <Box>
                                        <Box sx={{position:'absolute', mt:28.5, width:165, display:'flex', justifyContent:'center'}}>
                                            <Button sx={{backgroundColor:'primary.main', border:1, borderColor:'text.primary', 
                                            py:0, px:2}} startIcon={<ShoppingCartOutlinedIcon />} style={TyStyD4SS9}
                                            variant="contained">$68</Button>
                                        </Box>

                                        <Box sx={{backgroundColor:'secondary.secondary', borderRadius:1,  width:150, height:213,
                                        textAlign:'center', px:1, py:1.5}} className='cardMenu'>
                                            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                                <Image src={Espresso} fit='cover' duration={0} height={140} width={140}/>
                                            </Box>
                                            <Typography style={TyStyD5P9}>Espresso</Typography>
                                            <Typography style={TyStyD2P6} sx={{lineHeight:1.1}}>Extracción pura de café con 
                                            granos de la casa, balance en acidez y dulzor (40ml).
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                                    <Box>
                                        <Box sx={{position:'absolute', mt:28.5, width:165, display:'flex', justifyContent:'center'}}>
                                            <Button sx={{backgroundColor:'primary.main', border:1, borderColor:'text.primary', 
                                            py:0, px:2}} startIcon={<ShoppingCartOutlinedIcon />} style={TyStyD4SS9}
                                            variant="contained">$59</Button>
                                        </Box>

                                        <Box sx={{backgroundColor:'secondary.secondary', borderRadius:1,  width:150, height:213,
                                        textAlign:'center', px:1, py:1.5}} className='cardMenu'>
                                            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                                <Image src={Americano} fit='cover' duration={0} height={140} width={140}/>
                                            </Box>
                                            <Typography style={TyStyD5P9}>Espresso</Typography>
                                            <Typography style={TyStyD2P6} sx={{lineHeight:1.1}}>
                                                Café clasico para disfrutar en cualquier momento. Agua caliente
                                                y expresso (240ml).
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                
                                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                                    <Box>
                                        <Box sx={{position:'absolute', mt:28.5, width:165, display:'flex', justifyContent:'center'}}>
                                            <Button sx={{backgroundColor:'primary.main', border:1, borderColor:'text.primary', 
                                            py:0, px:2}} startIcon={<ShoppingCartOutlinedIcon />} style={TyStyD4SS9}
                                            variant="contained">$68</Button>
                                        </Box>

                                        <Box sx={{backgroundColor:'secondary.secondary', borderRadius:1,  width:150, height:213,
                                        textAlign:'center', px:1, py:1.5}} className='cardMenu'>
                                            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                                <Image src={Latte} fit='cover' duration={0} height={140} width={140}/>
                                            </Box>
                                            <Typography style={TyStyD5P9}>Latte</Typography>
                                            <Typography style={TyStyD2P6} sx={{lineHeight:1.1}}>
                                                Bebida con un mayor sabor dulce y la presencia de un sutil sabor
                                                a expresso (250ml).
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                                    <Box>
                                        <Box sx={{position:'absolute', mt:28.5, width:165, display:'flex', justifyContent:'center'}}>
                                            <Button sx={{backgroundColor:'primary.main', border:1, borderColor:'text.primary', 
                                            py:0, px:2}} startIcon={<ShoppingCartOutlinedIcon />} style={TyStyD4SS9}
                                            variant="contained">$68</Button>
                                        </Box>

                                        <Box sx={{backgroundColor:'secondary.secondary', borderRadius:1,  width:150, height:213,
                                        textAlign:'center', px:1, py:1.5}} className='cardMenu'>
                                            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                                <Image src={Cappuccino} fit='cover' duration={0} height={140} width={140}/>
                                            </Box>
                                            <Typography style={TyStyD5P9}>Cappuccino italiano</Typography>
                                            <Typography style={TyStyD2P6} sx={{lineHeight:1.1}}>
                                                Combinación de la intensidad del espresso y suavidad de la leche
                                                cremada (260ml)
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
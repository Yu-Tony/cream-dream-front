  /*--------------------------IMPORTS--------------------- */
import React from "react";
import {Card, Typography, Paper, Button, Box, Grid} from '@mui/material';
import Image from 'mui-image'

import HomeImage from './images/HomeImageL.jpg';
import FlechaRF from './images/FlechaRF3.png';
import HamHuevo from './images/HamHuevo.jpg';
import CakeBolitas from './images/CakeBolitas.jpg';
import StarProm from './images/starProm.png';
import MoSa from './images/molly&Sara.png';
import BirthdayE from './images/Birthday.jpg';
import SanV from './images/SanV.jpg';
import Navidad from './images/Navidad.jpg';
import Halloween from './images/Halloween.jpg';
import FlechaCD from './images/FlechaCD.png';
import GalletasB from './images/GalletasBolitas.jpg';
import PayG from './images/PayGalletas.jpg';
import PastelPB from './images/PastelPB.jpg';
import Cupcake from './images/CupcakeR.jpg';

import Carousel from 'react-grid-carousel';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import Producto from "../components/Producto";
import useDrawer from "../hooks/useDrawer";
import { createDrawer } from "../utils";

import "./css/home.css";

const ProductoDrawer = ({ toggle, isOpen }) =>
  createDrawer(Producto, toggle, isOpen);

export default function Home(){

     /*--------------------------STYLE--------------------- */ 
    const TyStyProm2={ fontSize: '3vw', color:"#644838", fontWeight:700 };
    const TyStyVP9={fontSize: 20, color:"#644838", fontWeight:900};

    const TyStyTSS9={fontSize: 35, color:"#FFFFFF", fontWeight:900};
    const TyStyTtSS9={fontSize: 30, color:"#FFFFFF", fontWeight:900};
    const TyStyVSS9={fontSize: 20, color:"#FFFFFF", fontWeight:900};
    const TyStyQSS9={fontSize: 15, color:"#FFFFFF", fontWeight:900};
    const TyStyVSM9={fontSize: 20, color:"#FFEFB5", fontWeight:900};
    const TyStyTP9={fontSize: 35, color:"#644838", fontWeight:900};

    const productoDrawer = useDrawer();

    

const [isShown, setIsShown] = React.useState(null);

  /*--------------------------RETURN--------------------- */
    return(
        <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        sx={{bgcolor: 'background.main'}}  >
      <ProductoDrawer {...productoDrawer} />

            {/* PRIMERO HEADER */}
            <Grid container >
                <Grid item className="Portada" xs={6} sx={{backgroundColor: 'secondary.main', height:'46vw'}}>
                    <Box sx={{ml: '5vw', mt:'8vw'}}>
                        <Typography className="tyEPortada" sx={{ fontSize:'5.7vw', color:"text.primary", fontWeight:900}}>
                            DEVOTOS AL 
                        </Typography>
                        <Typography className="tyEPortada" sx={{fontSize:'5.7vw', color:"text.tertiary", fontWeight:900, lineHeight: 0.8}}>
                            BUEN SABOR
                        </Typography>
                        <Typography className="tyFPortada" sx={{fontSize:'2.2vw', mt:'4vw', mr:'4vw', color:"text.primary", fontWeight:900, lineHeight: 1}}>
                            Para cualquier hora de comida, antojo o celebración.
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'end'}}>
                        <Image src={FlechaCD} duration={0} width="28vw"/>
                    </Box>
                </Grid>
                <Grid className="Portada" item xs={6} sx={{height:"46vw"}}>
                    <Image src={HomeImage} duration={0} fit="cover"/>
                </Grid>
            </Grid>

            {/* Texto Arriba */}
            <Box className="boxTyDD" sx={{pt:"4vw", mb:"4vw"}}>
                    <Typography sx={{ textAlign: 'center', lineHeight:"1.5vh",  textDecoration: 'underline', 
                    textUnderlinePosition: "under", textDecorationColor:"#DE6D71", textDecorationThickness: '0.3vw'}}
                    className="TyStyV3P5">
                        Un 
                        <Typography className="tyDD" sx={{fontSize: '1.8vw', color:"text.tertiary", fontWeight:500, 
                        display:"inline", lineHeight:"1.5vh", textDecoration: 'underline', 
                        textUnderlinePosition: "under", textDecorationColor:"#DE6D71", textDecorationThickness: '0.3vw'}}> descuento </Typography> 
                        siempre hace la comida más 
                        <Typography className="tyDD" sx={{fontSize: '1.8vw', color:"text.tertiary", fontWeight:500, 
                        display:"inline", lineHeight:"1.5vh", textDecoration: 'underline', 
                        textUnderlinePosition: "under", textDecorationColor:"#DE6D71", textDecorationThickness: '0.3vw'}}> deliciosa</Typography> 
                        .
                    </Typography>
            </Box>

            {/* SEGUNDO PROMOCIONES*/}
            <Grid container >
                    <Grid item className="itemPromB" xs={12} sm={5} sx={{height:'35vw'}} >
                        <Box className="tyPromB" sx={{height:'2.4vw', backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:20, ml:'2.5vw', mt:'1.5vw'}}> 
                        <Typography  sx={{ml:'0.6vw', mr:'0.6vw',}} className="TyStyProm" >
                            Hamburguesa de Huevo</Typography> 
                        </Box>
                        <Box className="tyPromB" sx={{height:'2.4vw', backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:10, ml:'2.5vw', mt:'0.8vw', opacity:'60%'}}> 
                        <Typography  sx={{ml:'0.6vw', mr:'1.2vw', 
                        visibility:'hidden'}} className="TyStyProm" >
                            Hamburguesa de Huevo</Typography>
                        </Box>

                        
                        <Box className="tyPromB" sx={{ ml:'3.7vw', mt:'3.7vw', position: 'absolute',  zIndex:30}}> 
                            <Typography id="tyStarPromG" className="tyStar">-15%</Typography>
                            <Image src={StarProm}  width='5.7vw'/>
                        </Box>
                        <Box className="tyPromB" sx={{height:'2.1vw', width:'7.4vw', backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:20,  ml:'2.5vw', mt:'5.6vw'}}>
                        </Box>
                        <Box className="tyPromB" sx={{height:'2.1vw', width:'8vw', backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:10,  ml:'2.5vw', mt:'5.2vw', opacity:'60%'}}> 
                        </Box>

                        <Box sx={{height:"100%",  width:"38vw", ml:'2.8vw'}}>
                            <Image id="imagePromG" src={HamHuevo} duration={0} fit="cover" />
                        </Box>

                        <Box className="cellPromB" sx={{height:'8vw', width:"32vw", mt:"20vw", ml:"1vw", 
                        display:"none"}}>
                            <Box sx={{height:'5vw', backgroundColor:'secondary.secondary', borderRadius:0.5,
                        position:"absolute", zIndex:10, ml:"1vw"}}>
                                <Typography  sx={{ml:'1vw', mr:'1vw',}} style={TyStyProm2}>
                                Hamburguesa de Huevo</Typography> 
                            </Box>
                            <Box sx={{height:'5vw', backgroundColor:'background.dark', borderRadius:0.5, position:"absolute",
                        opacity:"60%", mt:'1.1vw', ml:"1.8vw"}}>
                                <Typography  sx={{ml:'1vw', mr:'1.3vw', opacity:"0%"}} style={TyStyProm2}>
                                Hamburguesa de Huevo</Typography> 
                            </Box>

                            <Box sx={{height:'4vw', width:"13vw",backgroundColor:'secondary.secondary', borderRadius:0.5,
                        position:"absolute", zIndex:10, mt:'7.8vw', ml:"1vw"}}>
                            </Box>
                            <Box sx={{height:'4vw',width:"13vw", backgroundColor:'background.dark', borderRadius:0.5, position:"absolute",
                        opacity:"60%", mt:'8.8vw', ml:"1.8vw"}}>
                            </Box>
                            <Box sx={{ position: 'absolute',  mt:'5.8vw', ml:"3.5vw", zIndex:30}}> 
                                <Typography id="tyStarPromG" className="tyStar" style={TyStyProm2}>-15%</Typography>
                                <Image src={StarProm} duration={0} width='9vw'/>
                            </Box>
                    
                        </Box>

                    </Grid>
                    <Grid item className="itemPromL" xs={12} sm={7} sx={{pl:'0.9vw'}}>
                        <Typography className="tyPromLTitle" sx={{textAlign:'center', fontSize:'2.3vw', 
                        color:"text.primary", fontWeight:900, letterSpacing:5, lineHeight:1, 
                        mb:'2vw'}}>PROMOCIONES</Typography>
                        <Grid container >
                            <Grid item className="iPromL" xs={4} >
                                <Box container>
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard" >
                                            -08%
                                        </Typography>
                                        <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image src={CakeBolitas} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item className="iPromL" xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard" >
                                            -35%
                                        </Typography>
                                        <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image  src={GalletasB} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item className="iPromL" xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard">
                                            -12%
                                        </Typography>
                                        <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image src={PayG} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>   
                        <Grid container sx={{pt:'2.4vw'}}>
                            <Grid item className="iPromL"  xs={4} >
                                <Box container>
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard">
                                            -15%
                                    </Typography>
                                    <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image src={HamHuevo} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item className="iPromL" xs={4} >
                                <Box container>
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard">
                                            -23%
                                    </Typography>
                                    <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image src={PastelPB} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item className="iPromL" xs={4} >
                                <Box container>
                                    <Box sx={{position: 'absolute',  zIndex:20, width:'11vw'}}> 
                                        <Typography className="tyStarCard">
                                            -10%
                                        </Typography>
                                        <Box className="starProm" sx={{position: 'absolute', width:'5.7vw'}} >
                                            <Image src={StarProm}  duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    <Card className="cardProm" sx={{width:'14.2vw', height:'14.2vw', ml:'1.9vw'}}> 
                                        <Image src={Cupcake} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid> 
                    </Grid>
            </Grid>

            {/* Texto Click */}
            <Box sx={{mt:'2.4vw', display:"flex", justifyContent:'center', pb:'3.5vw'}}>
                    <Typography className="tyPromClick" sx={{fontSize: '1.6vw', color:"text.primary", fontWeight:500, textAlign: 'center',
                    display:"inline",fontStyle:'italic'}}>
                        Mira más.  </Typography> 
                    <Typography className="tyPromClick" sx={{fontSize: '1.6vw', color:"text.secondary", fontWeight:500, fontStyle:'italic',
                    display:"inline", textDecoration: 'underline', textUnderlinePosition: "under"}}>  Haz click! 
                    </Typography>
                    <Box className="imPromClick" sx={{display:'inline', height:"2vw"}}>
                        <Image src={FlechaRF} duration={0} fit="cover"/>
                    </Box>
            </Box>

            {/* TERCERO SOBRE NOSOTROS*/}
            <Box container sx={{ justifyContent:'center', display:'flex'}}>
                    <Box className="boxTSN" sx={{backgroundColor:'secondary.secondary', height:'45vw', width:"87vw", borderRadius:8,
                    position:'absolute', ml:'1.8vw'}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize:'3.2vw', color:"text.primary", fontWeight:900,
                                mt:'5vw',ml:'4.7vw'}}>TODO SOBRE</Typography>
                                <Typography sx={{fontSize: '3.2vw', color:"text.tertiary", fontWeight:900,
                                ml:'4.7vw', lineHeight:1}}>NOSOTROS</Typography>
                                <Typography className="TyStyVP3" sx={{ mt:'2.5vw',ml:'4.7vw'}}>
                                    En <span className="TyStyVP5"> CreamDream </span> creemos que un trabajo en 
                                    <span className="TyStyVT3"> equipo </span> hace que un 
                                    <span className="TyStyVP5"> sueño funcione</span>.
                                </Typography>
                                <Typography className="TyStyVP3" sx={{ mt:'0.4vw', ml:'4.7vw'}}>
                                    Nuestras sucursales y cocinas están formadas por grupos de
                                    <span className="TyStyVP5"> amantes del buen sabor</span> y lo dulce, 
                                    transmiten su <span className="TyStyVP5"> compromiso</span> y 
                                    <span className="TyStyVP5"> perspectivas </span>
                                    únicas en cada platillo que preparan.
                                </Typography>
                                <Typography className="TyStyVP3" sx={{ mt:'0.4vw', ml:'4.7vw'}}>
                                    Cada uno de nosotros nos comprometemos a ofrecerle a nuestros clientes
                                    una <span className="TyStyVP5"> experiencia unica </span> y  
                                    <span className="TyStyVP5"> satisfactoria</span>.
                                </Typography>
                                <Typography className="TyStyVP5" sx={{ mt:'2.3vw', ml:'4.7vw'}}>
                                    Disfruta como en un <span className="TyStyVT5">sueño</span>.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box container sx={{ml:"6vw", mt:'1.5vw', height:"100%", width:"33vw", display:"flex",
                            alignContent:"center"}}>
                                    <Image src={MoSa} duration={0} fit="cover" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="boxTSN" sx={{backgroundColor:'background.dark', height:'45vw', width:"87vw",borderRadius:8,
                    mt:'1.7vw', mr:'2.2vw'}}></Box>
            </Box>

            {/* Texto Eventos */}
            <Box sx={{pt:'3.2vw'}}>
                    <Typography className="tyEvent" sx={{fontSize: '3.1vw', color:"text.primary", fontWeight:900, textAlign:'center', 
                mb:'1.6vw'}}>
                        EVENTOS
                    </Typography>
            </Box>


            {/* CUARTO EVENTOS*/}
            <Grid container pt={2}>
                <Grid item xl={12} lg={12}>

                    <Carousel cols={4} rows={1} gap={10}  responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 3
                        },
                        {
                            breakpoint: 990,
                            cols: 2
                        },
                        {
                            breakpoint: 767,
                            cols: 1,
                            autoplay: 5000
                        }
                    ]} loop>


                        <Carousel.Item>
                            <Card >
                                <CardContent onClick={productoDrawer.toggle}>
                                    
                                        <Box sx={{ position:"relative"}}  onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(null)}>
                                            <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:2,
                                                pl:1, pt:55.5, width:260}}> 
                                                SAN VALENTIN</Typography>
                                            <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:1, pl:1.5,
                                                pt:56, width:260}}> 
                                                SAN VALENTIN</Typography>
                                            <Box sx={{height: 500}}>
                                                <Image src={SanV} duration={0} fit="cover"/>
                                            </Box>

                                        
                                            {isShown === 1 &&  (
                                            <Box  sx={{position:'absolute', backgroundColor: 'primary.main', alignContent:'center',   bottom: 0,
                                            left: 0,
                                            width: '100%',m: "1px", zIndex:20}}>
                                                <Box sx={{width:'100%', position:'absolute'}}>
                                                    <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,
                                                    mt:3}}> 
                                                        SAN VALENTIN</Typography>
                                                    <Typography style={TyStyTtSS9} sx={{textAlign:'center',  px:0.4,
                                                    lineHeight:1, mt:1}}> 
                                                        COOCKIES CORAZÓN </Typography>
                                                    <Typography style={TyStyVP9} sx={{textAlign:'center',  px:0.4, 
                                                    lineHeight:1, mt:2}}> 
                                                        Transmite lo que sientes. Galletas sabor vainilla
                                                        con una bonita variedad de decoraciones y mensajes hechos con 
                                                        glasa casera de la receta tradicional de CreamDream. Tres tipos 
                                                        tamaños.
                                                    </Typography>
                                                    <Typography style={TyStyVSS9} sx={{textAlign:'center',  px:0.4, 
                                                    mt:3, lineHeight:1}}> 
                                                        Docena de galletas envueltas individualmente a 
                                                        <span style={TyStyVSM9}> $260</span>
                                                    </Typography>
                                                    <Typography style={TyStyQSS9} sx={{textAlign:'center',  px:0.4, 
                                                    mt:2}}> 
                                                     CLICK PARA MÁS
                                                    </Typography>
                                                </Box>
                                                <Box sx={{height: 500, width:"100%", opacity:'8%'}}>
                                                    <Image src={SanV} duration={0} fit="cover"/>
                                                </Box>
                                            </Box>
                                            )}



                                        </Box>  
                               

                                   
                                </CardContent>
                              
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent onClick={productoDrawer.toggle}>
                                    <Box sx={{ position:"relative"}}  onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(null)}>
                                            <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:2,
                                                                                    pl:1, pt:55.5, width:260}}> 
                                                CUMPLEAÑOS</Typography>
                                            <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:1, pl:1.5,
                                                pt:56, width:260}}> 
                                                CUMPLEAÑOS</Typography>
                                            <Box sx={{height: 500,}}>
                                                <Image src={BirthdayE} duration={0} fit="cover"/>
                                            </Box>

                                            {isShown === 2 &&  (
                                                <Box  sx={{position:'absolute', backgroundColor: 'primary.main', alignContent:'center',   bottom: 0,
                                                left: 0,
                                                width: '100%',m: "1px", zIndex:20}}>

                                                    <Box sx={{width:'100%', position:'absolute'}}>
                                                        <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,
                                                        mt:3}}> 
                                                            CUMPLEAÑOS</Typography>
                                                        <Typography style={TyStyTtSS9} sx={{textAlign:'center',  px:0.4,
                                                        lineHeight:1, mt:1}}> 
                                                            CAKE BIRTHDAY</Typography>
                                                        <Typography style={TyStyVP9} sx={{textAlign:'center',  px:0.4, 
                                                        lineHeight:1, mt:2}}> 
                                                            Paquete feliz para juntarse con familia y amigos. Velas, pastel, cubiertos
                                                            y un pequeño cañon de confetti incluido, todo lo necesario para
                                                            festejar.
                                                        </Typography>
                                                        <Typography style={TyStyVSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:3, lineHeight:1}}> 
                                                            Pastel para 20 personas con extras incluidos a <span 
                                                            style={TyStyVSM9}>$940</span>
                                                        </Typography>
                                                        <Typography style={TyStyQSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:2}}> 
                                                            CLICK PARA MÁS
                                                        </Typography>
                                                    </Box>

                                                    <Box sx={{height: 500, width:"100%", opacity:'8%'}}>
                                                                <Image src={BirthdayE} duration={0} fit="cover"/>
                                                    </Box>
                                                </Box>
                                            )}
                                    </Box>                                  
                                </CardContent>
                                
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent onClick={productoDrawer.toggle}>
                            
                                    <Box sx={{ position:"relative"}}  onMouseEnter={() => setIsShown(3)} onMouseLeave={() => setIsShown(null)}> 

                                        <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:2,
                                            pl:1, pt:55.5, width:260}}> 
                                            NAVIDAD</Typography>
                                        <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:1, pl:1.5,
                                            pt:56, width:260}}> 
                                            NAVIDAD</Typography>
                                        <Box sx={{height: 500}}>
                                            <Image src={Navidad} duration={0} fit="cover"/>
                                        </Box>

                                        {isShown === 3 &&  (

                                            <Box  sx={{position:'absolute', backgroundColor: 'primary.main', alignContent:'center',   bottom: 0,
                                            left: 0,
                                            width: '100%',m: "1px", zIndex:20}}>

                                                <Box sx={{width:'100%', position:'absolute'}}>
                                                    <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,
                                                    mt:3}}> 
                                                        NAVIDAD</Typography>
                                                    <Typography style={TyStyTtSS9} sx={{textAlign:'center',  px:0.4,
                                                    lineHeight:1, mt:1}}> 
                                                        CHOCOLATE CHIPS COOCKIES</Typography>
                                                    <Typography style={TyStyVP9} sx={{textAlign:'center',  px:0.4, 
                                                    lineHeight:1, mt:2}}> 
                                                        A veces la respuesta correcta para un regalo son galletas con
                                                        chispas de chocolate. Galleta crujientes con un delicioso sabor 
                                                        a mantequilla, chispas de chocolate semidulces y una ligera base
                                                        malvadisco.
                                                    </Typography>
                                                    <Typography style={TyStyVSS9} sx={{textAlign:'center',  px:0.4, 
                                                    mt:3, lineHeight:1}}> 
                                                        Bolsa con 8 galletas a
                                                        <span style={TyStyVSM9}> $100</span>
                                                    </Typography>
                                                    <Typography style={TyStyQSS9} sx={{textAlign:'center',  px:0.4, 
                                                    mt:2}}> 
                                                        CLICK PARA MÁS
                                                    </Typography>
                                                </Box>

                                                <Box sx={{height: 500, width:"100%", opacity:'8%'}}>
                                                    <Image src={Navidad} duration={0} fit="cover"/> 
                                                </Box>
                                            </Box>

                                        )}

                                            
                                    </Box>
        
                                </CardContent>
                         
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent onClick={productoDrawer.toggle}>
                                        <Box sx={{ position:"relative"}}  onMouseEnter={() => setIsShown(4)} onMouseLeave={() => setIsShown(null)}> 
                                            <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:30,
                                                pl:1, pt:55.5, width:260}}> 
                                                HALLOWEEN</Typography>
                                            <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:20, pl:1.5,
                                                pt:56, width:260}}> 
                                                HALLOWEEN</Typography>
                                            <Box sx={{height: 500}}>
                                                <Image src={Halloween} duration={0} fit="cover"/>
                                            </Box>

                                            {isShown === 4 &&  (

                                                <Box  sx={{position:'absolute', backgroundColor: 'primary.main', alignContent:'center',   bottom: 0,
                                                left: 0,
                                                width: '100%',m: "1px", zIndex:20}}>

                                                    <Box sx={{width:'100%', position:'absolute'}}>
                                                        <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,mt:3}}> 
                                                        HALLOWEEN</Typography>
                                                        <Typography style={TyStyTtSS9} sx={{textAlign:'center',  px:0.4,
                                                        lineHeight:1, mt:1}}> 
                                                            Marshmallow Ghost Brownies</Typography>
                                                        <Typography style={TyStyVP9} sx={{textAlign:'center',  px:0.4, 
                                                        lineHeight:1, mt:2}}> 
                                                            Fantasmalmente adorables. Brownies rellenos de chocolate
                                                            liquido y nuez picada, decoración de malvadisco con escencia 
                                                            de vainilla, su sabor te seguira hasta la muerte. 
                                                        </Typography>
                                                        <Typography style={TyStyVSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:3, lineHeight:1}}> 
                                                            30 rebanadas a <span style={TyStyVSM9}>$390</span>
                                                        </Typography>
                                                        <Typography style={TyStyQSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:2}}> 
                                                            CLICK PARA MÁS
                                                        </Typography>
                                                    </Box>

                                                    <Box sx={{height: 500, width:"100%", opacity:'8%'}}>
                                                        <Image src={Halloween} duration={0} fit="cover"/>
                                                    </Box>  
                                                </Box>

                                            )}

                                        </Box>
                                </CardContent>
                             
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent onClick={productoDrawer.toggle}>
                                    <Box sx={{ position:"relative"}}  onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(null)}>
                                            <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:2,
                                                                                    pl:1, pt:55.5, width:260}}> 
                                                CUMPLEAÑOS</Typography>
                                            <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:1, pl:1.5,
                                                pt:56, width:260}}> 
                                                CUMPLEAÑOS</Typography>
                                            <Box sx={{height: 500,}}>
                                                <Image src={BirthdayE} duration={0} fit="cover"/>
                                            </Box>

                                            {isShown === 2 &&  (
                                                <Box  sx={{position:'absolute', backgroundColor: 'primary.main', alignContent:'center',   bottom: 0,
                                                left: 0,
                                                width: '100%',m: "1px", zIndex:20}}>

                                                    <Box sx={{width:'100%', position:'absolute'}}>
                                                        <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,
                                                        mt:3}}> 
                                                            CUMPLEAÑOS</Typography>
                                                        <Typography style={TyStyTtSS9} sx={{textAlign:'center',  px:0.4,
                                                        lineHeight:1, mt:1}}> 
                                                            CAKE BIRTHDAY</Typography>
                                                        <Typography style={TyStyVP9} sx={{textAlign:'center',  px:0.4, 
                                                        lineHeight:1, mt:2}}> 
                                                            Paquete feliz para juntarse con familia y amigos. Velas, pastel, cubiertos
                                                            y un pequeño cañon de confetti incluido, todo lo necesario para
                                                            festejar.
                                                        </Typography>
                                                        <Typography style={TyStyVSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:3, lineHeight:1}}> 
                                                            Pastel para 20 personas con extras incluidos a <span 
                                                            style={TyStyVSM9}>$940</span>
                                                        </Typography>
                                                        <Typography style={TyStyQSS9} sx={{textAlign:'center',  px:0.4, 
                                                        mt:2}}> 
                                                            CLICK PARA MÁS
                                                        </Typography>
                                                    </Box>

                                                    <Box sx={{height: 500, width:"100%", opacity:'8%'}}>
                                                                <Image src={BirthdayE} duration={0} fit="cover"/>
                                                    </Box>
                                                </Box>
                                            )}
                                    </Box>
                                </CardContent>
                                
                            </Card>
                        </Carousel.Item>

                    </Carousel>

                </Grid>
            </Grid>

            {/* QUINTO*/}

            <Typography sx={{textAlign: 'center', textDecoration: 'underline', mt:"3vw", mb:"2vw",
                textUnderlinePosition: "under", textDecorationColor:"#DE6D71", textDecorationThickness: '0.3vw'}}
                className="TyStyV3P5">
                        Platillos especiales para momentos especiales
            </Typography>

        </Grid>
    );
}
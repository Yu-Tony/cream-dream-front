import React from "react";
import {Card, CardMedia, Typography, Link, Paper, Button, Box, Grid, ThemeProvider, createTheme, Container} from '@mui/material';
import { zIndex } from '@mui/system';
import Carousel from 'react-material-ui-carousel'
import Image from 'mui-image'

import HomeImage from './images/HomeImageL.jpg';
import LineaRF from './images/LineaRF2.png';
import LineaRFp from './images/LineaRFp.png';
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

    const TyStyVP3={fontSize: 20, color:"#644838", fontWeight:300};
    const TyStyVP5={fontSize: 20, color:"#644838", fontWeight:500};
    const TyStyV3P5={fontSize: 23, color:"#644838", fontWeight:500};
    const TyStyVP9={fontSize: 20, color:"#644838", fontWeight:900};
    const TyStyVT3={fontSize: 20, color:"#FA8466", fontWeight:300};
    const TyStyVT5={fontSize: 20, color:"#FA8466", fontWeight:500};
    const TyStyTSS9={fontSize: 35, color:"#FFFFFF", fontWeight:900};
    const TyStyTtSS9={fontSize: 30, color:"#FFFFFF", fontWeight:900};
    const TyStyVSS9={fontSize: 20, color:"#FFFFFF", fontWeight:900};
    const TyStyQSS9={fontSize: 15, color:"#FFFFFF", fontWeight:900};
    const TyStyVSM9={fontSize: 20, color:"#FFEFB5", fontWeight:900};
    const TyStyTP9={fontSize: 35, color:"#644838", fontWeight:900};



// RESOLVER 
    
    var items = [
        {
            evento: "Halloween",
            producto: "Marshmallow Ghost Brownies",
            descricion: "Fantasmalmente adorables, Su sabor te seguira hasta la muerte",
            precio: "20 rebanadas a $290"
        }
    ]


    function Item(props){
    return (
        <Paper sx={{width:200}}>
            <Typography>{props.item.evento}</Typography>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

// RESOLVER


    return(
        <ThemeProvider theme={theme}>
            <Grid container >
                <Grid item xs={6} sx={{backgroundColor: 'secondary.main', height:560,}}>
                    <Box sx={{ml: 10, mt:14}}>
                        <Typography sx={{ fontSize: 62, color:"text.primary", fontWeight:900}}>
                            DEVOTOS AL 
                        </Typography>
                        <Typography sx={{ fontSize: 62, color:"text.tertiary", fontWeight:900, lineHeight: 0.8}}>
                            BUEN SABOR
                        </Typography>
                        <Typography sx={{ mt:5, mr:10, fontSize: 34, color:"text.primary", fontWeight:900, lineHeight: 1}}>
                            Para cualquier hora de comida, antojo o celebración.
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'end'}}>
                        <Image src={FlechaCD} duration={0} width="50%"/>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{height:560}}>
                    <Image src={HomeImage} duration={0} fit="cover"/>
                </Grid>
            </Grid>
            <Box sx={{backgroundColor: 'background.main', pt: 7, pb:2}}>
                <Box sx={{mb:2}}>
                    <Typography sx={{textAlign: 'center', lineHeight:0.1}} style={TyStyV3P5}>
                        Un 
                        <Typography sx={{fontSize: 23, color:"text.tertiary", fontWeight:500, 
                        display:"inline", lineHeight:0.1}}> descuento </Typography> 
                        siempre hace la comida más 
                        <Typography sx={{fontSize: 23, color:"text.tertiary", fontWeight:500, 
                        display:"inline", lineHeight:0.1}}> deliciosa</Typography> 
                        .
                    </Typography>
                    <Box sx={{display: 'inline-flex', justifyContent: 'center', height:"100%", width:"100%", mb:1}}>
                        <Image src={LineaRF} duration={0} height="10%" width="43%"/>
                    </Box>
                </Box>
                <Grid container >
                    <Grid item xs={5} sx={{height:460}} >
                        <Box sx={{height:30, backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:20, ml:4, mt:2}}> <Typography sx={{ml:1, mr:1,}} style={TyStyProm}>
                            Hamburguesa de Huevo</Typography> 
                        </Box>
                        <Box sx={{height:30, backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:10, ml:4, mt:1, opacity:'60%'}}> <Typography sx={{ml:1, mr:2, visibility:'hidden'}}
                        style={TyStyProm}>
                            Hamburguesa de Huevo</Typography>
                        </Box>

                        
                        <Box sx={{ ml:6, mt:6, position: 'absolute',  zIndex:30}}> 
                            <Typography sx={{position: 'absolute', zIndex:40, ml:2, mt:2.5}} style={TyStyProm}>
                                -15%
                            </Typography>
                            <Image src={StarProm}  width='18%'/>
                        </Box>
                        <Box sx={{height:26, width:100, backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:20, ml:4, mt:9}}>
                        </Box>
                        <Box sx={{height:26, width:108, backgroundColor:'secondary.secondary', position: 'absolute',
                        zIndex:10, ml:4, mt:8, opacity:'60%'}}> 
                        </Box>

                        <Box sx={{height:"100%",  width:"92%", ml:5}}>
                            <Image src={HamHuevo} duration={0} fit="cover" />
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{pl:1}}>
                        <Typography sx={{textAlign:'center', fontSize: 32, color:"text.primary", fontWeight:900,
                        letterSpacing:5, lineHeight:1, mb:3}}>PROMOCIONES</Typography>
                        <Grid container>
                            <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -30%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image src={CakeBolitas} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -35%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image src={GalletasB} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -12%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image src={PayG} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>   
                        <Grid container sx={{pt:4}}>
                        <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -15%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image  src={HamHuevo} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -16%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image src={PastelPB} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box container >
                                    <Box sx={{position: 'absolute',  zIndex:20, width:200}}> 
                                        <Typography sx={{position: 'absolute', zIndex:40, ml:1.8, mt:2.5}} 
                                        style={TyStyProm}>
                                            -10%
                                        </Typography>
                                        <Image src={StarProm}  width='37%'/>
                                    </Box>
                                    <Card sx={{width:186, height:186, ml:3}}> 
                                        <Image src={Cupcake} duration={0} fit="cover"/>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
                <Box sx={{mt:3, display:"flex", justifyContent:'center', pb:6}}>
                    <Typography sx={{fontSize: 20, color:"text.primary", fontWeight:500, textAlign: 'center',
                    display:"inline",fontStyle:'italic'}}>
                        Mira más.</Typography> 
                    <Typography sx={{fontSize: 20, color:"text.secondary", fontWeight:500, fontStyle:'italic',
                    display:"inline"}}> Haz click! 
                    </Typography>
                    <Box sx={{position: 'absolute', top:"172%", left:"58%" }}>
                        <Image src={FlechaRF} duration={0} width="59%"/>
                    </Box>
                </Box>
                <Box sx={{position: 'absolute', top:"178%", left:"49.5%" }}>
                <Image src={LineaRFp} duration={0} width="30%"/>
                </Box>
                <Box container sx={{ justifyContent:'center', display:'flex'}}>
                    <Box  sx={{backgroundColor:'secondary.secondary', height:590, width:"88%", borderRadius:8,
                    position:'absolute', ml:3}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 40, color:"text.primary", fontWeight:900,
                                mt:9,ml:8}}>TODO SOBRE</Typography>
                                <Typography sx={{fontSize: 40, color:"text.tertiary", fontWeight:900,
                                ml:8, lineHeight:1}}>NOSOTROS</Typography>
                                <Typography style={TyStyVP3} sx={{ mt:4,ml:8}}>
                                    En <span style={TyStyVP5}> CreamDream </span> creemos que un trabajo en 
                                    <span style={TyStyVT3}> equipo </span> hace que un 
                                    <span style={TyStyVP5}> sueño funcione</span>.
                                </Typography>
                                <Typography style={TyStyVP3} sx={{ mt:1,ml:8}}>
                                    Nuestras sucursales y cocinas están formadas por grupos de
                                    <span style={TyStyVP5}> amantes del buen sabor</span> y lo dulce, 
                                    transmiten su <span style={TyStyVP5}> compromiso</span> y 
                                    <span style={TyStyVP5}> perspectivas </span>
                                    únicas en cada platillo que preparan.
                                </Typography>
                                <Typography style={TyStyVP3} sx={{ mt:1,ml:8}}>
                                    Cada uno de nosotros nos comprometemos a ofrecerle a nuestros clientes
                                    una <span style={TyStyVP5}> experiencia unica </span> y  
                                    <span style={TyStyVP5}> satisfactoria</span>.
                                </Typography>
                                <Typography style={TyStyVP5} sx={{ mt:2,ml:8}}>
                                    Disfruta como en un <span style={TyStyVT5}>sueño</span>.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box container sx={{display:'flex', justifyContent:'center', pt:4}}>
                                    <Image src={MoSa} duration={0} height="76%" width="76%"/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box  sx={{backgroundColor:'background.dark', height:590, width:"88%",borderRadius:8,
                    mt:3, mr:4}}></Box>
                </Box>
                <Box sx={{pt:5}}>
                    <Typography sx={{fontSize: 40, color:"text.primary", fontWeight:900, textAlign:'center', 
                mb:3}}>
                        EVENTOS
                    </Typography>
                    <Carousel sx={{height: 550}} fullHeightHover={false} navButtonsAlwaysVisible= 'true' 
                    navButtonsProps={{ style: {backgroundColor: '#DE6D71'}} } indicatorIconButtonProps={{ style: {backgroundColor: '#DE6D71'}}}
                    activeIndicatorIconButtonProps={{ style: {color: '#DE6D71'}}}>
                        <Grid container sx={{pl:7, pr:10}}>
                            <Grid item xs={3}>
                                <Container>
                                <Link href="#" underline="none">
                                    <Box sx={{height: 500, width:270, position:'absolute', backgroundColor: 'primary.main',
                                    alignContent:'center', display:'flex'}}>
                                        <Box sx={{width:270, position:'absolute'}}>
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
                                        <Box sx={{height: 500, width:270, opacity:'8%'}}>
                                            <Image src={BirthdayE} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{height: 500, width:270,  zIndex:10, "&:hover": {visibility:'hidden'}}}>
                                        <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:30,
                                            pl:1, pt:55.5, width:260}}> 
                                            CUMPLEAÑOS</Typography>
                                        <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:20, pl:1.5,
                                            pt:56, width:260}}> 
                                            CUMPLEAÑOS</Typography>
                                        <Box sx={{height: 500, width:270}}>
                                            <Image src={BirthdayE} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                </Link>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                <Link href="#" underline="none">
                                    <Box sx={{height: 500, width:270, position:'absolute', backgroundColor: 'primary.main',
                                    alignContent:'center', display:'flex'}}>
                                        <Box sx={{width:270, position:'absolute'}}>
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
                                        <Box sx={{height: 500, width:270, opacity:'8%'}}>
                                            <Image src={SanV} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{height: 500, width:270,  zIndex:10, "&:hover": {visibility:'hidden'}}}>
                                        <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:30,
                                            pl:1, pt:55.5, width:260}}> 
                                            SAN VALENTIN</Typography>
                                        <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:20, pl:1.5,
                                            pt:56, width:260}}> 
                                            SAN VALENTIN</Typography>
                                        <Box sx={{height: 500, width:270}}>
                                            <Image src={SanV} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                </Link>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                <Link href="#" underline="none">
                                    <Box sx={{height: 500, width:270, position:'absolute', backgroundColor: 'primary.main',
                                    alignContent:'center', display:'flex'}}>
                                        <Box sx={{width:270, position:'absolute'}}>
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
                                        <Box sx={{height: 500, width:270, opacity:'8%'}}>
                                            <Image src={Navidad} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{height: 500, width:270,  zIndex:10, "&:hover": {visibility:'hidden'}}}>
                                        <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:30,
                                            pl:1, pt:55.5, width:260}}> 
                                            NAVIDAD</Typography>
                                        <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:20, pl:1.5,
                                            pt:56, width:260}}> 
                                            NAVIDAD</Typography>
                                        <Box sx={{height: 500, width:270}}>
                                            <Image src={Navidad} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                </Link>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                <Link href="#" underline="none">
                                    <Box sx={{height: 500, width:270, position:'absolute', backgroundColor: 'primary.main',
                                    alignContent:'center', display:'flex'}}>
                                        <Box sx={{width:270, position:'absolute'}}>
                                            <Typography style={TyStyTP9} sx={{textAlign:'center', px:0.4,
                                            mt:3}}> 
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
                                        <Box sx={{height: 500, width:270, opacity:'8%'}}>
                                            <Image src={Halloween} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{height: 500, width:270,  zIndex:10, "&:hover": {visibility:'hidden'}}}>
                                        <Typography style={TyStyTSS9} sx={{position:'absolute', zIndex:30,
                                            pl:1, pt:55.5, width:260}}> 
                                            HALLOWEEN</Typography>
                                        <Typography style={TyStyTP9} sx={{position:'absolute', zIndex:20, pl:1.5,
                                            pt:56, width:260}}> 
                                            HALLOWEEN</Typography>
                                        <Box sx={{height: 500, width:270}}>
                                            <Image src={Halloween} duration={0} fit="cover"/>
                                        </Box>
                                    </Box>
                                </Link>
                                </Container>
                            </Grid>
                        </Grid>
                    </Carousel>
                </Box>
                <Box>
                    <Typography sx={{textAlign: 'center', lineHeight:0.1}} style={TyStyV3P5}>
                        Platillos especiales para momentos especiales
                    </Typography>
                    <Box sx={{display: 'inline-flex', justifyContent: 'center', height:"100%", width:"100%", mb:1}}>
                        <Image src={LineaRF} duration={0} height="10%" width="38%"/>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
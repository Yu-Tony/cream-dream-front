  /*--------------------------IMPORTS--------------------- */
import React from "react";
import {Card, Typography, Paper, Button, Box, Grid} from '@mui/material';
import Image from 'mui-image'

import HomeImage from './images/HomeImageL.jpg';
import LineaRF from './images/LineaRF2.png';
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


export default function Home(){

     /*--------------------------STYLE--------------------- */ 
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



  /*--------------------------FUNCIONES--------------------- */
    
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
const [isShown, setIsShown] = React.useState(null);

  /*--------------------------RETURN--------------------- */
    return(
        <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        sx={{bgcolor: 'background.main'}}  >

            {/* PRIMERO HEADER */}
            <Grid container >
               
                <Grid item xs={12} sm={12} md={7} lg={6} sx={{backgroundColor: 'secondary.main', height:650}}>
                    <Grid container sx={{ mt:14}}>
                        <Grid item xs={1} sm={1} md={1} lg={2}>  </Grid>
                        <Grid item xs={9} sm={10} md={11} lg={10}>
                        <Typography sx={{ fontSize: 62, color:"text.primary", fontWeight:900}}>
                            DEVOTOS AL 
                        </Typography>
                        <Typography sx={{ fontSize: 62, color:"primary.main", fontWeight:900, lineHeight: 0.8}}>
                            BUEN SABOR
                        </Typography>
                        <Typography sx={{ mt:5, mr:10, fontSize: 34, color:"text.primary", fontWeight:900, lineHeight: 1}}>
                            Para cualquier hora de comida, antojo o celebración.
                        </Typography>
                        </Grid>
                       

                    </Grid>
                    
                    <Grid container display={{xs:"none", sm: "none", md: "block" }}>
                        <Grid item xs={0} sm={0} md={12} lg={12}>
                            <Box sx={{display:'flex', justifyContent:'end'}}>
                            <Image src={FlechaCD} duration={0} width="50%"/>
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={6} sx={{height:650}}>
                    <Image src={HomeImage} duration={0} fit="cover"/>
                </Grid>
            </Grid>

            {/* SEGUNDO PROMOCIONES*/}
            <Grid container pt={10}>

                {/* Texto arriba */}
                <Grid item lg={12}>
                    <Typography sx={{textAlign: 'center'}} style={TyStyV3P5}>
                        Un 
                        <Typography sx={{fontSize: 23, color:"primary.main", fontWeight:500, 
                        display:"inline"}}> descuento </Typography> 
                        siempre hace la comida más 
                        <Typography sx={{fontSize: 23, color:"primary.main", fontWeight:500, 
                        display:"inline"}}> deliciosa</Typography> 
                        .
                    </Typography>
                    
                    <Box sx={{display: 'inline-flex', justifyContent: 'center', height:"100%", width:"100%", mb:1}}>
                        <Image src={LineaRF} duration={0} height="10%" width="43%"/>
                    </Box>
                </Grid>

                {/* Imagenes */}
                <Grid item lg={12}>
                    <Grid container pt={10}>

                        <Grid item sm={'none'} md={1}></Grid>

                        {/* Promociones imagen grande */}
                        <Grid item xs={12} sm={12} md={5} lg={5} sx={{height:460}} >
                            <Box sx={{height:30, backgroundColor:'background.main', position: 'absolute',
                            zIndex:20, ml:4, mt:2}}> <Typography sx={{ml:1, mr:1,}} style={TyStyProm}>
                                Hamburguesa de Huevo</Typography> 
                            </Box>

                            <Box sx={{height:30, backgroundColor:'background.main', position: 'absolute',
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

                            <Box sx={{height:26, width:100, backgroundColor:'background.main', position: 'absolute',
                            zIndex:20, ml:4, mt:9}}>
                            </Box>

                            <Box sx={{height:26, width:108, backgroundColor:'background.main', position: 'absolute',
                            zIndex:10, ml:4, mt:8, opacity:'60%'}}> 
                            </Box>

                            <Box sx={{height:"100%",  width:"92%", pl:3}}>
                                <Image src={HamHuevo} duration={0} fit="cover" />
                            </Box>
                            
                        </Grid>

                        {/* Promociones cuadricula */}
                        <Grid item xs={12} sm={12} md={6} lg={5} >
                            <Typography sx={{textAlign:'center', fontSize: 32, color:"text.primary", fontWeight:900, letterSpacing:5, lineHeight:1, mb:3}}>
                                PROMOCIONES
                            </Typography>

                            <Grid container>
                                <Grid item xs={6} sm={4} md={5} lg={4} mb={4} >
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

                                <Grid item s={6} sm={4} md={5} lg={4} mb={4} >
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

                                <Grid item xs={6} sm={4} md={5} lg={4} mb={4} >
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

                                <Grid item xs={6} sm={4} md={5} lg={4} mb={4} >
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

                                <Grid item xs={6} sm={4} md={5} lg={4} mb={4} >
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

                                <Grid item xs={6} sm={4} md={5} lg={4} mb={4} >
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

                        <Grid item sm={0} md={1}></Grid>

                        {/* Mira mas */}
                        <Grid container spacing={0} alignItems="center"  justifyContent="center"> 
                        
                            <Box sx={{mt:3, display:"flex", justifyContent:'center', pb:6}}>
                                <Typography sx={{fontSize: 20, color:"text.primary", fontWeight:500, textAlign: 'center', display:"inline",fontStyle:'italic'}}>
                                    Mira más.
                                </Typography> 

                                <Typography sx={{fontSize: 15, color:"text.secondary",  fontStyle:'italic', display:"inline"}}> 
                                    <a href="#">Haz click aquí! </a>
                                </Typography>

                                
                            </Box>

                 

                        </Grid>
                       
                

                    </Grid>
                </Grid>
            </Grid>

            {/* TERCERO SOBRE NOSOTROS*/}
            <Grid container>
                <Grid item xs={'none'} sm={1}></Grid>

                <Grid item xs={11} sm={10} lg={10}>

                    
                    <Grid container justifyContent="center" alignItems="center" sx={{backgroundColor:'white', borderRadius:8, ml:3, boxShadow: "-20px 20px #efd3c3"}} p={6}>
                   
                       <Grid item md={12} lg={6} px={3}>
                                    <Typography sx={{fontSize: 40, color:"text.primary", fontWeight:900}}>TODO SOBRE</Typography>

                                    <Typography sx={{fontSize: 40, color:"text.tertiary", fontWeight:900}}>NOSOTROS</Typography>

                                    <Typography style={TyStyVP3}>
                                        En <span style={TyStyVP5}> CreamDream </span> creemos que un trabajo en 
                                        <span style={TyStyVT3}> equipo </span> hace que un 
                                        <span style={TyStyVP5}> sueño funcione</span>.
                                    </Typography>

                                    <Typography style={TyStyVP3} >
                                        Nuestras sucursales y cocinas están formadas por grupos de
                                        <span style={TyStyVP5}> amantes del buen sabor</span> y lo dulce, 
                                        transmiten su <span style={TyStyVP5}> compromiso</span> y 
                                        <span style={TyStyVP5}> perspectivas </span>
                                        únicas en cada platillo que preparan.
                                    </Typography>

                                    <Typography style={TyStyVP3} >
                                        Cada uno de nosotros nos comprometemos a ofrecerle a nuestros clientes
                                        una <span style={TyStyVP5}> experiencia unica </span> y  
                                        <span style={TyStyVP5}> satisfactoria</span>.
                                    </Typography>

                                    <Typography style={TyStyVP5}>
                                        Disfruta como en un <span style={TyStyVT5}>sueño</span>.
                                    </Typography>
                                    
                       </Grid>

                       <Grid item xs={12} sm={'none'} md={'none'} lg={2} pt={5}></Grid>

                       <Grid item  md={12} lg={4} px={3} >
                          
                            <Image src={MoSa} duration={0} height="70%" width="100%" />
                          
                       </Grid>
                     
                     

                       
                    </Grid>

                  
                                
                    
                </Grid>

                <Grid item xs={'none'} sm={1}></Grid>
            </Grid>

            {/* CUARTO EVENTOS*/}
            <Grid container pt={10}>
                <Grid item xl={12} lg={12}>


                    <Typography sx={{fontSize: 40, color:"text.primary", fontWeight:900, textAlign:'center', mb:3}}>
                        EVENTOS
                    </Typography>


                 

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
                                <CardContent>

                                    
                                    <a href="#">
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
                                    </a>

                                   
                                </CardContent>
                              
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent>

                                    <a href="#">
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

</a>
                                    
                                        
                                  

                                </CardContent>
                                
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent>
                                <a href="#">
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
                                        
                                  
                                </a>
                               

                                </CardContent>
                         
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent>
                                    <a href="#">
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

                                    </a>

                            
                    

                                </CardContent>
                             
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card>
                                <CardContent>

                                    <a href="#">
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

</a>
                                    
                                        
                                  

                                </CardContent>
                                
                            </Card>
                        </Carousel.Item>


             
                    </Carousel>

                                        

                </Grid>
            </Grid>

            {/* QUINTO*/}
            <Grid container py={10}>
                <Grid item lg={12}>
                    <Typography sx={{textAlign: 'center', lineHeight:0.1}} style={TyStyV3P5}>
                        Platillos especiales para momentos especiales
                    </Typography>
                    <Box sx={{display: 'inline-flex', justifyContent: 'center', height:"100%", width:"100%", mb:1}}>
                        <Image src={LineaRF} duration={0} height="10%" width="38%"/>
                    </Box>
                </Grid>
            </Grid>
  



      
        </Grid>
    );
}
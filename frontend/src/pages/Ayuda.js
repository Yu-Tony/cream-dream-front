import React from "react";
import {Paper, Typography, Button, Box, Grid, Link,
    Stepper, Step, StepLabel, StepContent, StepIcon} from '@mui/material';
import Image from 'mui-image'

import covidMalteada from './images/covidMalteada.jpg';

import "./css/ayuda.css";


const stepsReserv = [
    {
      label: 'Inicia Sesión',
      description: `Haz clic en el icono que se encuentra en el lado izquierdo que 
      se encuentra arriba de la página.`,
    },
    {
      label: 'Entra al apartado de reservaciones',
      description:
      `Se encuentra al comienzo de la página, te llevara a la página donde podrás 
      llenar los datos que se requieren para hacer una reservación.`,
    },
    {
      label: 'Llena los datos que se piden',
      description: `Después de llenar los datos que piden, haga clic en el botón para 
      buscar disponibilidad de mesas en la sucursal con las características deseadas.`,
    },
    {
        label: 'Disponibilidad',
        description: `Se le mostrara un mensaje con la afirmación o negativa de mesas disponibles,
         si el mensaje es positivo para confirmar la reservación debe de hacer clic en el botón de
          aceptar, si desea cancelar el proceso solo oprima el botón de cancelar. `,
      },
      {
        label: 'Descarga tu QR',
        description: `Al confirmar la reservación aparecerá el QR con la información de tu reservación, 
        solo debes de mostrarlo al llegar a tu sucursal y te indicaran tu mesa.`,
      }
  ];

const stepsMenu = [
    {
      label: 'Localiza el QR en tu mesa',
      description: `Te llevara a la página al Menú virtual de Cream Dream, también puedes acceder a este 
      picando “Menu” en la barra que se encuentra al comienzo de la página.`,
    },
    {
      label: 'Ve la descripción de un producto',
      description:
      `En el menú podrás ver una breve descripción de cada producto. Al seleccionarlo, se mostrará una 
      descripción aún más detallada del producto cómo su tamaño, cantidad o núm. de piezas. Para quitarlo 
      solamente dale al botón X de la esquina. El botón rojo bajo cada producto muestra el precio unitario 
      y también se usa en el servicio de pedido web, conoce más en el apartado “Pedido sucursal en web”.`,
    },
    {
      label: ' Cambia de sección',
      description: `En la parte de arriba de los productos, se encuentra las secciones de nuestro menú, 
      pica uno para desplegar los productos y conoce todos los platillos que Cream Dream puede ofrecer.`,
    },
      {
        label: 'Pide tu orden o haz el pedido en web',
        description: `Haz tu pedido a un mesero o puedes conocer nuestro nuevo servicio en web. Sabemos que 
        cuando hay tantas opciones delicioso es difícil escoger una cosa, ahora hazlo totalmente a tu ritmo y no 
        habrá presión en tomar una decisión rápidamente. Conoce más en el apartado de “Pedido sucursal en web”.`,
      }
  ];
  
const stepsPedW = [
    {
        label: 'Inicia Sesión',
        description: `Haz clic en el icono que se encuentra en el lado izquierdo que 
        se encuentra arriba de la página.`,
    },
    {
      label: 'Escoge un producto en el Menú',
      description:
      `Para hacer un pedido hay dos opciones: 1.Si selecciona directamente el botón bajo cada 
      producto y cargara dicho producto de manera unitaria al carrito con la opción de tamaño default. 2.
      Si abre la descripción detallada del producto, podrá escoger entre las opciones de tamaño del producto 
      y la cantidad del producto seleccionado, para llevarlo al carrito solo debe de hacer clic en el botón 
      “Añadir al carrito”.`,
    },
    {
      label: 'Carrito',
      description: `Puede abrir la ventana de “Carrito” al seleccionar el icono de carro de compras que se 
      encuentra en la barra de navegación. Aquí se mostrará todos los productos que haya agregado, para confirmar 
      el pedido solo debe de oprimir el botón “ordenar”. En la parte inferior se mostrará todos los productos de las 
      ordenes que haya pedido.`,
    },
      {
        label: 'Pagar la cuenta',
        description: `Al terminar de consumir, solo debes de volver a ir a la ventana de carrito, selecciona el 
        botón “Pagar” y te llevara a la ventana de Pago que cuenta con varias facilidades, para saber más lea el 
        apartado “Pago”.`,
      }
  ];

const stepsPago= [
    {
        label: 'Revisa el ticket',
        description: `Dentro de la página de pago se mostrará un ticket con todos los productos consumidos, 
        las unidades pedidas y el precio unitario de cada uno, debajo de todos ellos se mostrará el subtotal.`,
    },
    {
      label: 'Elige el porcentaje de propina',
      description:
      `Debajo del ticket hay un slider que lleva del 0% al 20% y dependiendo del porcentaje seleccionada, 
      se mostrara en el cuadro la cantidad que representa el porcentaje del subtotal.`,
    },
    {
      label: '¿Habrá división de cuenta? ¡Selecciona por cuantas personas!',
      description: `Para escoger por cuantas personas se dividirá la cuenta solo debes de escoger la cantidad en 
      la caja que dice “Separar cuenta en 1”, que es el valor predeterminado. Debajo se mostrará un cuadro donde 
      se mostrará la cantidad de dinero que pagará cada persona, así como el total de la cuenta.`,
    },
      {
        label: 'Pagar la cuentaEscoge un método de pago',
        description: `Hay dos formas de pago, en efectivo y vía PayPal.`,
      },
      {
        label: 'Pago completado',
        description: `Hay dos formas de pago, en efectivo y vía PayPal.`,
      },
      {
        label: '¡Califíquenos!',
        description: `En Cream Dream buscamos la excelencia, ayúdenos a mejorar. Califíquenos y deje un 
        comentario con las recomendaciones para mejorar nuestro servicio, al terminar solo debe de picar el 
        botón “enviar”.`,
      }
  ];

export default function Ayuda(){


    const [activeStep, setActiveStep] = React.useState(0);
    const [activeStepM, setActiveStepM] = React.useState(0);
    const [activeStepW, setActiveStepW] = React.useState(0);
    const [activeStepP, setActiveStepP] = React.useState(0);


    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleNextM = () => {
        setActiveStepM((prevActiveStep) => prevActiveStep + 1);
      };
      const handleNextW = () => {
        setActiveStepW((prevActiveStep) => prevActiveStep + 1);
      };
      const handleNextP = () => {
        setActiveStepP((prevActiveStep) => prevActiveStep + 1);
      };


    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleBackM = () => {
        setActiveStepM((prevActiveStep) => prevActiveStep - 1);
    };
    const handleBackW = () => {
        setActiveStepW((prevActiveStep) => prevActiveStep - 1);
    };
    const handleBackP = () => {
        setActiveStepP((prevActiveStep) => prevActiveStep - 1);
    };



    const handleReset = () => {
      setActiveStep(0);
    };
    const handleResetM = () => {
        setActiveStepM(0);
     };
    const handleResetW = () => {
        setActiveStepW(0);
    };
    const handleResetP = () => {
        setActiveStepP(0);
    };


    return(
        <Box container>
            <Grid container sx={{backgroundColor: "secondary.main"}}>
                <Grid item xs={4} sx={{ height:'42vw', textAlign:"center"}}>
                    <Box sx={{ mt:"9vw"}}>
                        <Typography sx={{fontSize:"2.9vw", color:"text.tertiary", fontWeight:900,
                    textShadow:'0.25vw 0.15vw #FFFF'}}>
                            NUEVOS TIEMPOS
                        </Typography>
                        <Typography className="tyPPortada" sx={{fontSize:"2.2vw", color:"text.primary", fontWeight:900, lineHeight: 1,
                    mt:"6vw"}}>
                            Abrete a la experiencia de un nuevo servicio
                        </Typography>
                        <Typography sx={{fontSize:"4.3vw", color:"secondary.secondary", fontWeight:900, 
                        textShadow:'0.25vw 0.15vw #DE6D71', mt:"5vw"}}>
                            CREAM
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{height:'42vw'}}>
                <Image src={covidMalteada} duration={0} fit="cover"/>
                </Grid>
                <Grid item xs={4} sx={{ height:'42vw', textAlign:"center"}}>
                    <Box sx={{ mt:"8vw"}}>
                        <Typography sx={{fontSize:"2.9vw", color:"text.tertiary", fontWeight:900, lineHeight: 1,
                    textShadow:'0.25vw 0.15vw #FFFF'}}>
                            NUEVAS COMODIDADES
                        </Typography>
                        <Typography className="tyPPortada2" sx={{fontSize:"2.2vw", color:"text.primary", fontWeight:900, lineHeight: 1, 
                        mt:"6vw"}}>
                            Toma el tiempo que necesites.
                        </Typography>
                        <Typography className="tyPPortada2" sx={{fontSize:"2.2vw", color:"text.primary", fontWeight:900, lineHeight: 1}}>
                            A tu ritmo, a un click.
                        </Typography>
                        <Typography sx={{fontSize:"4.3vw", color:"secondary.secondary", fontWeight:900, 
                        textShadow:'0.25vw 0.15vw #DE6D71', mt:"5vw"}}>
                            DREAM
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{backgroundColor:"background.main", position:"sticky"}}>
                <Grid container>
                    <Grid item xs={4} sx={{display:"flex", justifyContent:"center"}}>
                        <Box className="boxNeedH" sx={{top:0, position:"sticky", height:"20vw", mt:"4vw", pt:"1vw"}}>
                            
                            <Typography className="needHelp" sx={{fontSize:"1.8vw", color:"text.primary", 
                            fontWeight:900}}>
                                ¿Necesitas ayuda?</Typography>
                            <Box sx={{mt:"1vw"}}>
                                <Link href="#reservBox" underline="none">
                                    <Button sx={{backgroundColor:"secondary.secondary", width:'18vw', height:"2.2vw", 
                                    borderRadius:"0.3vw", mb:"0.15vw", display:"flex", alignItems:"center", 
                                    justifyContent:"start",pl:"1vw", boxShadow:'0.25vw 0.25vw #EFD3C3', 
                                    "&:hover": {backgroundColor:"secondary.main"}}} className="tyBtn">
                                    Reservaciones</Button>
                                </Link>
                                <Link href="#menuBox" underline="none">
                                    <Button sx={{backgroundColor:"secondary.secondary", width:'18vw', height:"2.2vw", 
                                borderRadius:"0.3vw", mb:"0.15vw", display:"flex", alignItems:"center", 
                                justifyContent:"start", pl:"1vw", boxShadow:'0.25vw 0.25vw #EFD3C3', 
                                "&:hover": {backgroundColor:"secondary.main"}}} className="tyBtn"  >
                                        Menú</Button>
                                </Link>
                                <Link href="#webBox" underline="none">
                                    <Button sx={{backgroundColor:"secondary.secondary", width:'18vw', height:"2.2vw", 
                                borderRadius:"0.3vw", mb:"0.15vw", display:"flex", alignItems:"center", 
                                justifyContent:"start", pl:"1vw", boxShadow:'0.25vw 0.25vw #EFD3C3', 
                                "&:hover": {backgroundColor:"secondary.main"}}} className="tyBtn" >
                                    Pedido sucursal en Web</Button>
                                </Link>
                                <Link href="#pagoBox" underline="none">
                                    <Button sx={{backgroundColor:"secondary.secondary", width:'18vw', height:"2.2vw", 
                                borderRadius:"0.3vw", mb:"0.15vw", display:"flex", alignItems:"center", 
                                justifyContent:"start", pl:"1vw", boxShadow:'0.25vw 0.25vw #EFD3C3', 
                                "&:hover": {backgroundColor:"secondary.main"}}} className="tyBtn" >
                                    Pago</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{}}>
                        <Box id="reservBox" sx={{mt:"5vw"}}>
                            <Typography className="tyTitles" >RESERVACIONES</Typography>
                            <Box className="boxStepper" sx={{ width: '53vw', mb:"1.3vw", ml:"2.8vw" }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {stepsReserv.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel iconContainerStyle={{fontSize:"2vw"}} optional={ index === 4 ? (
                                            <Typography className="tyLastS" variant="caption">Last step</Typography>) : null}>
                                            <Typography className="tyLabel" >{step.label}</Typography>
                                            
                                        </StepLabel>
                                        <StepContent>
                                            <Typography className="tyDesc" >{step.description}</Typography>
                                            <Box sx={{ mb: "0.8vw" }}>
                                                <div>
                                                <Button className="btnCont"  variant="contained" onClick={handleNext} 
                                                sx={{ height:"2.2vw", width:"8vw", mt: "0.6vw", mr:  "0.6vw" }}>
                                                    {index === stepsReserv.length - 1 ? 'Finish' : 'Continue'}
                                                </Button>
                                                <Button disabled={index === 0} onClick={handleBack} 
                                                sx={{height:"2.2vw", width:"5vw", mt:  "0.6vw", mr:  "0.6vw", 
                                                fontSize:"1.2vw" }} className="tyBtnBack">
                                                    Back
                                                </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                    ))}
                                </Stepper>
                                {activeStep === stepsReserv.length && (
                                <Paper className="ppFinal" square elevation={0} sx={{ mr:"13vw", p: "0.7vw", height:"1vw", display: "flex",
                                justifyContent:"center", alignItems:"center"}}>
                                    <Typography className="tyFinal" sx={{fontSize:"1.2vw"}}>¡Pasos de Reservación completados!</Typography>
                                    <Button className="btnFinal" sx={{fontSize:"1.2vw"}} onClick={handleReset} >
                                        Reset
                                    </Button>
                                </Paper>
                                )}
                            </Box>
                        </Box>
                        <Box id="menuBox" sx={{mt:"5vw"}}>
                            <Typography className="tyTitles">MENU</Typography>
                            <Box className="boxStepper" sx={{ width: '53vw', mb:"1.3vw", ml:"2.8vw" }}>
                                <Stepper activeStep={activeStepM} orientation="vertical">
                                    {stepsMenu.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel optional={ index === 3 ? (
                                            <Typography className="tyLastS" variant="caption">Last step</Typography>) : null}>
                                            <Typography className="tyLabel" >{step.label}</Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography className="tyDesc" >{step.description}</Typography>
                                            <Box sx={{ mb: "0.8vw" }}>
                                                <div>
                                                <Button className="btnCont" variant="contained" onClick={handleNextM} 
                                                sx={{ height:"2.2vw", width:"8vw", mt: "0.6vw", mr:  "0.6vw" }}>
                                                    {index === stepsMenu.length - 1 ? 'Finish' : 'Continue'}
                                                </Button>
                                                <Button disabled={index === 0} onClick={handleBackM} 
                                                sx={{height:"2.2vw", width:"5vw", mt:  "0.6vw", mr:  "0.6vw", 
                                                fontSize:"1.2vw" }} className="tyBtnBack">
                                                    Back
                                                </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                    ))}
                                </Stepper>
                                {activeStepM === stepsMenu.length && (
                                <Paper className="ppFinal" square elevation={0} sx={{ mr:"13vw", p: "0.7vw", height:"1vw", display: "flex",
                                justifyContent:"center", alignItems:"center"}}>
                                    <Typography className="tyFinal" sx={{fontSize:"1.2vw"}}>¡Pasos de Menu completados!</Typography>
                                    <Button className="btnFinal" sx={{fontSize:"1.2vw"}} onClick={handleResetM} >
                                        Reset
                                    </Button>
                                </Paper>
                                )}
                            </Box>
                        </Box>
                        <Box id="webBox" sx={{mt:"5vw"}}>
                            <Typography className="tyTitles">PEDIDO SUCURSAL EN WEB</Typography>
                            <Box className="boxStepper" sx={{ width: '53vw', mb:"1.3vw", ml:"2.8vw" }}>
                                <Stepper activeStep={activeStepW} orientation="vertical">
                                    {stepsPedW.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel optional={ index === 3 ? (
                                            <Typography className="tyLastS" variant="caption">Last step</Typography>) : null}>
                                            <Typography className="tyLabel" >{step.label}</Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography className="tyDesc">{step.description}</Typography>
                                            <Box sx={{ mb: "0.8vw" }}>
                                                <div>
                                                <Button className="btnCont" variant="contained" onClick={handleNextW} 
                                                sx={{ height:"2.2vw", width:"8vw", mt: "0.6vw", mr:  "0.6vw" }}>
                                                    {index === stepsPedW.length - 1 ? 'Finish' : 'Continue'}
                                                </Button>
                                                <Button  disabled={index === 0} onClick={handleBackW} 
                                                sx={{height:"2.2vw", width:"5vw", mt:  "0.6vw", mr:  "0.6vw", 
                                                fontSize:"1.2vw" }}  className="tyBtnBack">
                                                    Back
                                                </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                    ))}
                                </Stepper>
                                {activeStepW === stepsPedW.length && (
                                <Paper className="ppFinal" square elevation={0} sx={{ mr:"13vw", p: "0.7vw", height:"1vw", display: "flex",
                                justifyContent:"center", alignItems:"center"}}>
                                    <Typography className="tyFinal" sx={{fontSize:"1.2vw"}} >¡Pasos de Pedido Web completados!</Typography>
                                    <Button className="btnFinal" sx={{fontSize:"1.2vw"}} onClick={handleResetW} >
                                        Reset
                                    </Button>
                                </Paper>
                                )}
                            </Box>
                        </Box>
                        <Box id="pagoBox" sx={{mt:"5vw"}}>
                            <Typography className="tyTitles">PAGO</Typography>
                            <Box className="boxStepper" sx={{ width: '53vw', mb:"1.3vw", ml:"2.8vw" }}>
                                <Stepper activeStep={activeStepP} orientation="vertical">
                                    {stepsPago.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel optional={ index === 5 ? (
                                            <Typography className="tyLastS" variant="caption">Last step</Typography>) : null}>
                                            <Typography className="tyLabel" >{step.label}</Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography className="tyDesc" >{step.description}</Typography>
                                            <Box sx={{ mb: "0.8vw" }}>
                                                <div>
                                                <Button className="btnCont" variant="contained" onClick={handleNextP} 
                                                sx={{ height:"2.2vw", width:"8vw", mt: "0.6vw", mr:  "0.6vw" }}>
                                                    {index === stepsPago.length - 1 ? 'Finish' : 'Continue'}
                                                </Button>
                                                <Button  disabled={index === 0} onClick={handleBackP} 
                                                sx={{height:"2.2vw", width:"5vw", mt:  "0.6vw", mr:  "0.6vw", 
                                                fontSize:"1.2vw" }} className="tyBtnBack">
                                                    Back
                                                </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                    ))}
                                </Stepper>
                                {activeStepP === stepsPago.length && (
                                <Paper className="ppFinal" square elevation={0} sx={{ mr:"13vw", p: "0.7vw", height:"1vw", display: "flex",
                                justifyContent:"center", alignItems:"center"}}>
                                    <Typography className="tyFinal" sx={{fontSize:"1.2vw"}}>¡Pasos de Pago completados!</Typography>
                                    <Button className="btnFinal" sx={{fontSize:"1.2vw"}} onClick={handleResetP} >
                                        Reset
                                    </Button>
                                </Paper>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
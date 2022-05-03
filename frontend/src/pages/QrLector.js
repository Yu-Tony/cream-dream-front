  /*--------------------------IMPORTS--------------------- */
import React, {useState, useRef} from 'react';
import { Grid, Typography} from "@mui/material";


import { QrReader } from 'react-qr-reader';
import "./css/menu.css";

export default function QrLector()
{
 
  const [data, setData] = useState('No result');
   
    /*--------------------------RETURN--------------------- */
    return(
      <>
     
     <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "background.main"}}  
        >
           
          <Grid container style={{ minHeight: '100vh', textAlign: "center" }} >

              {/*ESPACIO */}
             <Grid item md={2} xs={12}></Grid>
             
              {/*CAMARA QR-READER Y  DATA DECIFRADA*/}
              <Grid item md={8} xs={12}>
                  <Typography variant='h1' class="title" > RESERVACIÓN</Typography>

                  <QrReader
                      onResult={(result, error) => {
                        if (!!result) {
                          setData(result?.text);
                        }

                        if (!!error) {
                          console.info(error);
                        }
                      }}
                      style={{ maxHeight: '50%' }}
                    />
                    <p>{data}</p>
  
              </Grid>

              {/*ESPACIO */}
              <Grid item md={2} xs={12}></Grid>
          </Grid>

      </Grid>

    </>
    );

 }



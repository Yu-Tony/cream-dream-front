import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, Typography} from "@mui/material";

import QRCode from "react-qr-code";
import { QrReader } from 'react-qr-reader';
import "./css/menu.css";

export default function QrLector()
{
 
  const [data, setData] = useState('No result');
   
    return(
      <>
      <Grid container sx={{marginLeft: "5%"}}>
      <Typography variant='h1' class="title" > RESERVACION</Typography></Grid>

      <Grid sx={{marginLeft: "10%", marginRight: "10%", top: 0}}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
      </Grid>
    
    </>
    );

 }



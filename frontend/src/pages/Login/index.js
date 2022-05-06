/*--------------------------IMPORTS--------------------- */
import React from "react";
import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";

import LoginComp from "./Components/Login";
import SignupComp from "./Components/Signup";

import "../css/menu.css";

{
  /*--------------------------INICIO LOGIN--------------------- */
}
export default function Session() {
  const [visible, setVisible] = React.useState(false);
  const [sign, setSign] = React.useState(true);

  function signUp() {
    setVisible(false);
    setSign(true);
  }

  function login() {
    setVisible(true);
    setSign(false);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{ bgcolor: "background.main" }}
    >
      <Box
        item
        xs={12}
        sx={{
          p: 8,
          bgcolor: "white",
          paddingTop: "60px",
          paddingBottom: "60px",
          boxShadow: "-20px 20px #efd3c3",
        }}
      >
        <Grid container textAlign={"center"} spacing={2} pb={"60px"}>
          <Grid item xs={12} sm={6}>
            <a href="#" onClick={() => signUp()}>
              <Typography variant="h4">REGISTRARSE</Typography>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <a href="#" onClick={() => login()}>
              <Typography variant="h4">INICIAR SESIÓN</Typography>
            </a>
          </Grid>
        </Grid>

        <Grid container>
          {visible && <LoginComp />}
          {sign && <SignupComp />}
        </Grid>
      </Box>
    </Grid>
  );
}

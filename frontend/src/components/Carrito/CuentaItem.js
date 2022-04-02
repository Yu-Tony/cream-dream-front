import { Grid, Typography } from "@mui/material";

function CuentaItem() {
  return (
    <>
      <Grid item lg={10}>
        <Typography>Platillo</Typography>
      </Grid>
      <Grid item lg={2} textAlign="end">
        <Typography>Precio</Typography>
      </Grid>
    </>
  );
}

export default CuentaItem;

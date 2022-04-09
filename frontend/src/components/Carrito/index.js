import { Grid, Icon, Box, Button, Divider, Paper } from "@mui/material";

import Orden from "./Orden";
import Cuenta from "./Cuenta";
import { drawerWidths } from "../../responsiveConst";
const paperParentStyle = {
  bgcolor: "background.main",
  ...drawerWidths,
  padding: "0rem 0",
  height: "100vh",
};

const dividerStyle = {
  bgcolor: "primary.main",
  margin: " 1.5rem 2rem",
  height: "0.09rem",
  borderRadius: "5px",
};

const scrollStyle = (theme) => ({
  overflowY: "auto",
  scrollbarColor: `${theme.palette.primary.main} white`,
  scrollbarWidth: "thin",
});

function Carrito({ toggleDrawer }) {
  return (
    <>
      <Paper
        sx={(theme) => ({
          ...paperParentStyle,
          ...scrollStyle(theme),
        })}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Button sx={{ color: "text.primary" }} onClick={toggleDrawer}>
                <Icon>close</Icon>
              </Button>
            </Grid>

            <Orden />
          </Grid>
        </Box>

        <Divider sx={dividerStyle} />

        <Box>
          <Grid container marginBottom="1rem">
            <Cuenta />
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Carrito;

import React, { useState } from "react";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Opciones({ callbackOnClick, data, state }) {
  const [selected, setSelected] = useState("");

  const handleOnClickSelect = (event) => {
    //console.log(event.target.value);
    state[1](event.target.value);
    //callbackOnClick(event.target.value);
  };

  return (
    <Grid container sx={{ justifyContent: "end" }}>
      <Grid item lg={3} md={6} sm={8} xs={12}>
        <FormControl fullWidth sx={{ mt: 2, mb: 2, ml: 2 }}>
          <InputLabel>Categorías</InputLabel>
          <Select
            name="categoria"
            label="Categoría"
            onChange={handleOnClickSelect}
            value={state[0]}
          >
            {data.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Opciones;

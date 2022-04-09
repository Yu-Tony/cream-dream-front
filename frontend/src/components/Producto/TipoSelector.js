import {
  Grid,
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { deepmerge } from "@mui/utils";

import React, { useState } from "react";

const labelStyle = (theme) => ({
  color: "text.primary",
  bgcolor: "common.white",
  display: "block",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",
  border: `2px solid ${theme.palette.background.dark}`,
  ":hover": { border: `2px solid ${theme.palette.text.primary}` },
});

const optionSelected = (theme) =>
  deepmerge(labelStyle(theme), {
    border: `2px solid ${theme.palette.text.primary}`,
  });

const setStyleSelected = (value, newValue, theme) => {
  if (value === newValue) return optionSelected(theme);
  else return labelStyle(theme);
};

function TipoSelector() {
  const [selected, setSelected] = useState("r");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const Option = ({ value, label }) => (
    <Grid xl={6} lg={6} md={6} sm={6} xs={12} item>
      <FormLabel
        htmlFor={value}
        sx={(theme) => setStyleSelected(value, selected, theme)}
      >
        <Typography variant="h5" fontWeight={600}>
          {label.text}
          <br />
          {label.unit ? `(${label.unit})` : null}
        </Typography>
        <Radio value={value} id={value} sx={{ display: "none" }} />
      </FormLabel>
    </Grid>
  );

  return (
    <RadioGroup onChange={handleOnChange}>
      <Grid container spacing={2}>
        <Option value="r" label={{ text: "Rebanada", unit: "120 g" }} />
        <Option value="p" label={{ text: "Pastel" }} />
      </Grid>
    </RadioGroup>
  );
}

export default TipoSelector;

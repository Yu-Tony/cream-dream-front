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

import React, { useState, useEffect } from "react";

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

const preciosAux = [
  { key: 0, label: "porcion", peso: "250 gr", precio: "5" },
  { key: 1, label: "unidad", precio: "20" },
];

function TipoSelector({ onChange, precios }) {
  const [selected, setSelected] = useState(precios[0].label);

  const handleOnChange = (event) => {
    //console.log(event.target.value);
    setSelected(event.target.value);
  };

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  useEffect(() => {
    console.log(precios);
  }, []);

  const Option = ({ value, label }) => (
    <Grid xl={6} lg={6} md={6} sm={6} xs={12} item>
      <FormLabel
        htmlFor={value}
        sx={(theme) => setStyleSelected(value, selected, theme)}
      >
        <Typography variant="h5" fontWeight={600}>
          {label.text}
          <br />
          {label.peso ? `(${label.peso})` : null}
        </Typography>
        <Radio value={value} id={value} sx={{ display: "none" }} />
      </FormLabel>
    </Grid>
  );

  return (
    <RadioGroup onChange={handleOnChange}>
      <Grid container spacing={2}>
        {precios.map((precio, index) => (
          <Option
            key={index}
            value={precio.label}
            label={{
              text: String(precio.label),
              peso: precio.peso ? precio.peso : null,
            }}
          />
        ))}
      </Grid>
    </RadioGroup>
  );
}

export default TipoSelector;

import {
  FormControl,
  TextField,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";

import { withStyles, makeStyles } from "@mui/styles";

export const StyledTextField = withStyles((theme) => ({
  root: {
    //letra
    "& .MuiInputBase-root": {
      color: "#644838",
      height: 60,
      fontFamily: "Outfit",
    },
    //label focus
    "& label.Mui-focused": {
      color: "#644838",
      fontFamily: "Outfit",
    },
    "& .MuiFormLabel-root": {
      color: "#644838",
      fontFamily: "Outfit",
      fontSize: 20,
      transform: "translate(0px, -28px)",
    },
    //normal outline
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#644838",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#de6d71",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fa8466",
      },
    },
  },
}))(TextField);

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgb(50, 50, 50)",
  },
  button: {
    padding: "0%",
    position: "relative",
    cursor: "pointer",
    borderColor: "#644838",
    borderWidth: 2,
    borderStyle: "solid",
    zIndex: "1000",
    "&:hover": {
      "& $fondo": {
        top: "-1px",
        right: "5px",
      },
    },
  },
  texto: {
    padding: "10px 30px",
    borderColor: "#644838",
    borderWidth: 2,
    borderStyle: "solid",
    color: "rgb(58, 36, 36)",
    borderRadius: "5px",
  },
  fondo: {
    zIndex: "-1000",
    position: "absolute",
    top: "10px",
    right: "-10px",
    borderRadius: "inherit",
    backgroundColor: "#ffefb5",
    width: "90%",
    height: "90%",
  },
  links: {
    color: "#644838",
    "&:hover, &:focus, &:active, &:target": {
      color: "#FA8466",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

export const labelStyle = {
  color: "#644838",
  fontFamily: "Outfit",
  fontSize: 20,
};

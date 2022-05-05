import { TextField } from "@mui/material";

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

const useStyles = makeStyles((theme) => ({
  line: {
    borderBottomColor: "#644838",
    borderWidth: 0,
    borderRightWidth: 2,
    borderStyle: "solid",
    height: "150vh",
  },
  section: {
    padding: "3%",
    cursor: "pointer",
    color: "#644838",
    "&:hover": {
      backgroundColor: "#FFEFB5",
    },
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
      "& $fondoOrange, $fondoYellow": {
        top: "5px",
        right: "10px",
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
  fondoYellow: {
    zIndex: "-1000",
    position: "absolute",
    top: "15px",
    right: "-1px",
    borderRadius: "inherit",
    backgroundColor: "#FFEFB5",
    width: "85%",
    height: "75%",
  },
  fondoOrange: {
    zIndex: "-1000",
    position: "absolute",
    top: "15px",
    right: "-1px",
    borderRadius: "inherit",
    backgroundColor: "#FA8466",
    width: "90%",
    height: "80%",
  },
  links: {
    color: "#644838",
    "&:hover, &:focus, &:active, &:target": {
      color: "#FA8466",
      textDecoration: "underline",
    },
  },
}));

export const labelStyle = {
  color: "#644838",
  fontFamily: "Outfit",
  fontSize: 20,
};

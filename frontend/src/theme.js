import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material/styles";

var theme = createTheme({
  palette: {
    primary: {
      main: "#FA8466",
      dark: "#DE6D71",
    },
    secondary: {
      main: "#FFEFB5",
    },
    background: {
      main: "#FEEEE5",
      dark: "#EFD3C3",
    },
    text: {
      primary: "#644838",
      secondary: "#DE6D71",
    },
  },
  typography: {
    fontFamily: "Outfit",
  },
  components: {
    MuiChip: {
      variants: [
        {
          props: { variant: "categoria" },
          style: {
            borderRadius: "10px",
            backgroundColor: "#644838",
            padding: "4px 8px 4px 8px",
            fontWeight: 500,
            fontSize: "1.15rem",
            height: "inherit",
            ":hover": {
              backgroundColor: "#DE6D71",
            },
          },
        },
      ],
    },
  },
});

//Fuentes responsivas
theme = deepmerge(theme, {
  typography: {
    h6: {
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
    },
  },
});
export default theme;

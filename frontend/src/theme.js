import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE6D71",
      dark: "#FA8466 ",
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
            fontSize: "1rem",
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

export default theme;

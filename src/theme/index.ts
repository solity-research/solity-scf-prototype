import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#937b57",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: "Poppins",
    allVariants: {
      zIndex: 1,
    },
    h1: { fontFamily: "Poppins Semibold" },
  },
});

export default theme;

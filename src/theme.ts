import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      main: string;
      gradient: string;
    };
  }
  interface PaletteOptions {
    navbar?: {
      main: string;
      gradient: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E72E4",
      light: "#825ee4",
      dark: "#324cdd",
    },
    secondary: {
      main: "#8392AB",
    },
    info: {
      main: "#11cdef",
    },
    success: {
      main: "#2dce89",
    },
    warning: {
      main: "#fb6340",
    },
    error: {
      main: "#f5365c",
    },

    background: {
      default: "#f8f9fa",
      paper: "rgba(255, 255, 255, 0.9)",
    },

    navbar: {
      main: "#1A1F3C",
      gradient: "linear-gradient(135deg, #1A1F3C 0%, #3A416F 100%)",
    },
  },

  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1.1rem", fontWeight: 500 },
    body1: { fontWeight: 400, fontSize: "0.95rem" },
    body2: { fontWeight: 300, fontSize: "0.85rem" },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          padding: "10px 20px",
          fontWeight: 600,
        },
        containedPrimary: {
          background: "linear-gradient(94.53deg, #5E72E4 0%, #825ee4 100%)",
          boxShadow: "0px 4px 12px rgba(94, 114, 228, 0.4)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1.5rem",
          borderRadius: 20,
          boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.06)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backdropFilter: "blur(20px)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
        },
      },
    },
  },
});

export default theme;

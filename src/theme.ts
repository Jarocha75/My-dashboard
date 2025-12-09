import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      main: string;
      gradient: string;
    };
    card: {
      gradient: string;
      glass: string;
    };
    icon: {
      blue: string;
      blueGradient: string;
    };
  }

  interface PaletteOptions {
    navbar?: {
      main: string;
      gradient: string;
    };
    card?: {
      gradient: string;
      glass: string;
    };
    icon?: {
      blue: string;
      blueGradient: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#3A7BFF",
      light: "#63A4FF",
      dark: "#0066FF",
    },

    secondary: {
      main: "#8392AB",
    },

    success: {
      main: "#5BE374",
    },

    error: {
      main: "#F5365C",
    },

    warning: {
      main: "#FB6340",
    },

    info: {
      main: "#11CDEF",
    },

    background: {
      default: "#0F1535",
      paper: "rgba(255, 255, 255, 0.06)",
    },

    navbar: {
      main: "#1A1F3C",
      gradient: "linear-gradient(135deg, #1A1F3C 0%, #3A416F 100%)",
    },

    card: {
      gradient: "linear-gradient(135deg, #060B26 0%, #1A1F37 100%)",
      glass: "rgba(255,255,255,0.05)",
    },

    icon: {
      blue: "#3A7BFF",
      blueGradient: "linear-gradient(135deg, #3A7BFF 0%, #0066FF 100%)",
    },
  },

  typography: {
    fontFamily: `"Plus Jakarta Sans", sans-serif`,

    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.4rem", fontWeight: 600 },
    h5: { fontSize: "1.2rem", fontWeight: 600 },
    h6: { fontSize: "1.05rem", fontWeight: 600 },

    body1: { fontSize: "0.95rem", fontWeight: 400 },
    body2: { fontSize: "0.85rem", fontWeight: 300 },

    button: { fontWeight: 600 },
  },

  shape: {
    borderRadius: 20,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(14px)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.25)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: "linear-gradient(135deg, #060B26 0%, #1A1F37 100%)",
          backdropFilter: "blur(12px)",
          color: "white",
          padding: "1.3rem",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          padding: "10px 22px",
          fontWeight: 600,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #3A7BFF 0%, #0066FF 100%)",
          boxShadow: "0px 4px 12px rgba(0, 102, 255, 0.35)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "linear-gradient(135deg, #1A1F3C 0%, #3A416F 100%)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          backdropFilter: "blur(12px)",
        },
      },
    },
  },
});

export default theme;

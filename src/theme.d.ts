import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      main: string;
      gradient: string;
    };
  }

  interface PaletteOptions {
    navbar?: {
      main?: string;
      gradient?: string;
    };
  }
}

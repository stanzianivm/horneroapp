import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

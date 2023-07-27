import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

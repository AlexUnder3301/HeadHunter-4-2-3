import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "../shared/store/index.ts";
import { Provider } from "react-redux";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  colors: {
    primary: [
      "#EDF2FF",
      "#DBE4FF",
      "#BAC8FF",
      "#91A7FF",
      "#748FFC",
      "#5C7CFA",
      "#4C6EF5",
      "#4263EB",
      "#3B5BDB",
      "#364FC7",
    ],

    black: [
      "#0F0F10",
      "#0F0F1010",
      "#0F0F1020",
      "#0F0F1030",
      "#0F0F1040",
      "#0F0F1050",
      "#0F0F1060",
      "#0F0F1070",
      "#0F0F1080",
      "#0F0F1090",
    ],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);

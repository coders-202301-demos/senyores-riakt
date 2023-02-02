import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/open-sans";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import GentlemenContextProvider from "./store/contexts/gentlemen/GentlemenContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GentlemenContextProvider>
      <App />
    </GentlemenContextProvider>
  </React.StrictMode>
);

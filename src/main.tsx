import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter } from "react-router";
import Page from "./routes/index.tsx";
import "../src/utils/i18next.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </StrictMode>
);

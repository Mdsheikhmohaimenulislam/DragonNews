import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./Router/Router";


import ContextProvider from "./ConText/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </StrictMode>
);

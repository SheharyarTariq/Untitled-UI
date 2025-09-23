import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Layout } from "./components/layout/layout";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <RouteProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </RouteProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import Bar from "./scenes/bar";

import Line from "./scenes/line";
import Pie from "./scenes/pie";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar  />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Common";
import { createContext, lazy, Suspense, useState } from "react";
import { ThemeContext } from "./Utils";
const AboutPage = lazy(() => import("./Pages/About"));
const LandingPage = lazy(() => import("./Pages/Landing"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/landing"
          element={
            <ThemeContext.Provider
              value={{
                theme: theme,
                toggleTheme: (value) => setTheme(value),
              }}
            >
              <LandingPage />
            </ThemeContext.Provider>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;

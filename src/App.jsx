import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Common";
import { lazy, Suspense } from "react";
const AboutPage = lazy(() => import("./Pages/About"));
const LandingPage = lazy(() => import("./Pages/Landing"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));

function App() {
  
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/landing" element={<LandingPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ROUTES } from "./Routes.tsx";
import Navigation from './components/NavBar/NavBar.tsx';
import { StationsPage } from "./pages/StationsPage/StationsPage.tsx";
import { StationInfoPage } from "./pages/StationInfoPage/StationInfoPage.tsx";
import { invoke } from "@tauri-apps/api/core";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    invoke('tauri', {cmd:'create'})
      .then(() =>{console.log("Tauri launched")})
      .catch(() =>{console.log("Tauri not launched")})
    return () =>{
      invoke('tauri', {cmd:'close'})
        .then(() =>{console.log("Tauri launched")})
        .catch(() =>{console.log("Tauri not launched")})
    }
  }, [])
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.STATIONS} element={<StationsPage />} />
        <Route path={`${ROUTES.STATIONS}/:id`} element={<StationInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


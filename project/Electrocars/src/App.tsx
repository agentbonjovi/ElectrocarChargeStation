import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ROUTES } from "./Routes.tsx";
import Navigation from './components/NavBar/NavBar.tsx';
import { StationsPage } from "./pages/StationsPage/StationsPage.tsx";
import { StationInfoPage } from "./pages/StationInfoPage/StationInfoPage.tsx";

function App() {
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

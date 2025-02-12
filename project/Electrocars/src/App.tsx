import { StationInfoPage} from "./pages/StationInfoPage/StationInfoPage.tsx";
import { StationsPage } from "./pages/StationsPage/StationsPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage";
import Navigation from './components/NavBar/NavBar.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage.tsx";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.tsx";
import { ReportPage } from "./pages/ReportPage/ReportPage.tsx";
import { AllReportsPage } from "./pages/AllReportsPage/AllReportsPage.tsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.tsx";
import { ROUTES } from "./Routes.tsx";
import { ForbiddenPage } from "./pages/403Page/ForbiddenPage.tsx";
import { NotFoundPage } from "./pages/404Page/NotFoundPage.tsx";
import { StationsModPage } from "./pages/StationsModPage/StationsModPage.tsx";
import { ChangeStationPage } from "./pages/ChangeStationPage/ChangeStationPage.tsx";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.STATIONS} element={<StationsPage />} />
        <Route path={`${ROUTES.STATIONS}/:id`} element={<StationInfoPage />} />
        <Route path={ROUTES.LOGIN} element={<AuthPage />} />
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
        <Route path={`${ROUTES.REPORTS}/:id`} element={<ReportPage />} />
        <Route path={`${ROUTES.REPORTS}`} element={<AllReportsPage />} />
        <Route path={`${ROUTES.PROFILE}`} element={<ProfilePage />} />
        <Route path={`${ROUTES.STATIONSMOD}`} element={<StationsModPage />} />
        <Route path={`${ROUTES.FORBIDDEN}`} element={<ForbiddenPage />} />
        <Route path={`${ROUTES.CHANGESTATION}/:id`} element={<ChangeStationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
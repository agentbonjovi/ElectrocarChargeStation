export const ROUTES = {
  HOME: "/",
  STATIONS: "/stations",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  REPORTS:"/reports",
  PROFILE:"/user",
  FORBIDDEN: "/403",
  NOTFOUND: "/404",
  STATIONSMOD: "/moderator-stations",
  CHANGESTATION: "/changeStation",
}
export type RouteKeyType = keyof typeof ROUTES;
export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
  HOME: "Главная",
  STATIONS: "Станции",
  LOGIN: "Войти",
  REGISTRATION: "Регистрация",
  REPORTS: "Отчеты",
  PROFILE: "Профиль",
  FORBIDDEN: "Страница 403",
  NOTFOUND: " Страница 404",
  CHANGESTATION: "Изменение станции",
  STATIONSMOD: "Станции",
};
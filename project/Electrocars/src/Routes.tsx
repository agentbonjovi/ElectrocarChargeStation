export const ROUTES = {
  HOME: "https://agentbonjovi.github.io/ElectrocarChargeStation/",
  STATIONS: "https://agentbonjovi.github.io/ElectrocarChargeStation/#/stations",
}
export type RouteKeyType = keyof typeof ROUTES;
export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
  HOME: "Главная",
  STATIONS: "Станции",
};
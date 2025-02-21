import { Api, PowerReports} from './Api';
import { Station, StationReport, GETReportInfo, GETStations} from './Api';

export const api = new Api({baseURL: 'http://192.168.56.1:8000'});
export type station = Station;
export type stationReport = StationReport;
export type temperatureReport = GETReportInfo;
export type stations = GETStations;
export type report = PowerReports;
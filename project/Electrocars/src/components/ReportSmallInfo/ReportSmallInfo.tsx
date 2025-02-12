import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./ReportSmallInfo.css"
import { report } from "../../api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { format, parseISO } from "date-fns";
import { useUserGroup } from "../../store/user";
import { useAppDispatch } from "../../store";
import { confirmReport } from "../../store/reports/slice";

const status_to_rus = {"Formed":"Сформирован",
  "Completed":"Завершен",
  "Rejected":"Отклонен",
  "Draft":"Черновик",
  "Deleted":"Удален"
}

const confirmReportA = (dispatch:any,report:report,confirm:0|1) => {
  if(!report.id) return
  if(report.status!="Formed") return
  
  dispatch(confirmReport({id:report.id.toString(),data:confirm}))
}

export const ReportSmallInfo: FC<report> = (report) => {
  const navigate = useNavigate();
  const userGroup = useUserGroup();
  const dispatch = useAppDispatch();
  return (
    <Card className="report-small-card">
      <Card.Body className="report-small-body">
        <Card.Title className="report-card-id">{report.id}</Card.Title>
        <Card.Text className="report-card-date">{report.report_date}</Card.Text>
        <Card.Text className="report-card-status">{status_to_rus[report.status]}</Card.Text>
        <Card.Text className="report-card-formed">{format(parseISO(report.formation_date || "0"), "dd.MM.yyyy HH:mm")}</Card.Text>
        <Card.Text className="report-card-temperature">{report.sum_power || "–"}</Card.Text>
        {userGroup=="power_analitic" && (
          <Card.Text className="report-card-username">{report.creator_id || "–"}</Card.Text>
        )}
        <Button onClick={() => navigate(`${ROUTES.REPORTS}/${report.id}`)}>Подробнее</Button>
        {userGroup=="power_analitic" && (
          <div style={{display:"flex",alignContent:"center",gap:5}}>
              <input type="image" src="/X.png" style={{width:35,height:35}} onClick={() => {confirmReportA(dispatch,report,0)} }></input>
              <input type="image" src="/tip.png" style={{width:35}} onClick={() => {confirmReportA(dispatch,report,1)}}></input>
          </div>
        )}
        <div className="qr-icon">
        {report.status === 'Completed' && report.qr &&(
          <div className="qr-hover-wrapper">
            <img className="status-icon" src="/qr.png" alt="QR Icon" />
            <div className="qr-hover">
              {report.qr && <img className="qr-code" src={`data:image/png;base64,${report.qr}`} alt="QR Code" />}
              <p>Общее энергопотребление: {report.sum_power}</p>
            </div>
          </div>
        )}
      </div>
      </Card.Body>
    </Card>
  );
};
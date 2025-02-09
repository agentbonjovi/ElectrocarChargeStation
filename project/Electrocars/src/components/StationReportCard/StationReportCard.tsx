import { FC, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./StationReportCard.css"
import { DEFAULT_PHOTO_URL } from "../../modules/mock";
import { StationReport } from "../../api/Api";
import { useAppDispatch } from "../../store/index.ts";
import { deleteStationFromReport, putPower } from "../../store/stations/slice";

interface ICardProps{
  stationReport:StationReport;
  is_draft:boolean;
  report_id?:string;
  onRemove: (stationId:string) => void;
}

export const StationReportCard: FC<ICardProps> = ({
  stationReport,
  report_id,
  is_draft,
  onRemove,
}) => {
  const dispatch = useAppDispatch();
  const [power, setPower] = useState(stationReport.power?.toString());

  const removeStaion = () =>{
    if(!report_id || !stationReport.station_id) return
    dispatch(deleteStationFromReport({reportID:report_id, stationID:stationReport.station_id}))
    .then(()=>{
      onRemove(stationReport?.station_id||"");
    })
  }

  const changePower = () =>{
    if(!report_id || !stationReport.station_id) return
    dispatch(putPower({reportID:report_id,stationID:stationReport.station_id,power:parseInt(power?.toString()||"0")}))
  }

  return (
    <Card className="station-report-card">
      <Card.Img
        className="cardImage station-report-image"
        variant="top"
        src={stationReport.photo_url || DEFAULT_PHOTO_URL}
      />
      <Card.Body className="station-report-body">
        <Card.Title>{stationReport.short_name}</Card.Title>
        <input className="power-input" 
        disabled={!is_draft}
        value={power}
        onBlur={changePower}
        onChange={(event) => setPower(event.target.value)} type="number"/>
        {is_draft && <Button onClick={() => removeStaion()}>Удалить</Button>}
      </Card.Body>
    </Card>
  );
};
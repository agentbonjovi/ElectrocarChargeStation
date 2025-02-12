import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./StationModCard.css"
import { DEFAULT_PHOTO_URL } from "../../modules/mock";
import { Station } from "../../api/Api";
import { ROUTES } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { deleteStation, getStations } from "../../store/stations/slice";

export const StationModCard: FC<Station> = (stationInfo) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  return (
    <Card className="station-mod-card">
      <Card.Img
        className="cardImage station-mod-image"
        variant="top"
        src={stationInfo.photo_url || DEFAULT_PHOTO_URL}
      />
      <Card.Body className="station-mod-body">
        <Card.Title id="station-mod-full_name">{stationInfo.full_name}</Card.Title>
        <Card.Text id="station-mod-work_time">{stationInfo.work_time}</Card.Text>
        <Card.Text id="station-mod-description">{stationInfo.description}</Card.Text>
        <div className="station-controls-panel">
            <Button variant="primary" onClick={() => navigate(`${ROUTES.CHANGESTATION}/${stationInfo.id}`)}>Редактировать</Button>
            <Button variant="primary" onClick={() => stationInfo.id && dispatch(deleteStation(stationInfo.id.toString())).then(()=>dispatch(getStations("")))}>Удалить</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
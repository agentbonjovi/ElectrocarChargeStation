import { FC, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./StationCard.css";
import { DEFAULT_PHOTO_URL } from "../../modules/mock";
import { addStationToReport } from "../../store/stations/slice";
import { useAppDispatch } from "../../store";
import { useUserGroup } from "../../store/user";

interface ICardProps {
  id?: number;
  photo_url?: string|null;
  short_name: string;
  worktime?: string;
  imageClickHandler: () => void;
}

export const StationCard: FC<ICardProps> = ({
  id,
  photo_url,
  short_name,
  worktime,
  imageClickHandler,
}) => {
  const dispatch = useAppDispatch();
  const userGroup = useUserGroup();
  const [disabled,setDisabled] = useState(false);
  const addStation = () =>{
    if(!id) return
    dispatch(addStationToReport(id.toString()))
    .then(()=>{
      setDisabled(true)
    })
    .catch(()=>setDisabled(true))
  }

  return (
    <Card className="station-card">
      <Card.Img
        className="cardImage"
        variant="top"
        src={photo_url || DEFAULT_PHOTO_URL}
        height={154}
        width={164}
        onClick={imageClickHandler}
      />
      <Card.Body className="station-card-body">
        <Card.Title>{short_name}</Card.Title>
        <Card.Text>Время работы: {worktime}</Card.Text>
        {userGroup!="guest" && <Button disabled={disabled} onClick={addStation} className="add-btn">Добавить</Button>}
      </Card.Body>
    </Card>
  );
};
import { FC } from "react";
import { Card } from "react-bootstrap";
import "./StationCard.css";
import { DEFAULT_PHOTO_URL } from "../../modules/mock";

interface ICardProps {
  photo_url?: string;
  short_name: string;
  work_time: string;
  imageClickHandler: () => void;
}

export const StationCard: FC<ICardProps> = ({
  photo_url,
  short_name,
  work_time,
  imageClickHandler,
}) => {

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
        <Card.Text>Время работы: {work_time}</Card.Text>
      </Card.Body>
    </Card>
  );
};
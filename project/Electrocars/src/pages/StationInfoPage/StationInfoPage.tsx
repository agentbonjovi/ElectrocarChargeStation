import "./StationInfoPage.css";
import { FC, useEffect } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTE_LABELS } from "../../Routes";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { STATIONS_MOCK } from "../../modules/mock";
import { DEFAULT_PHOTO_URL } from "../../modules/mock";
import { useStationInfo } from "../../store/stations";
import { useAppDispatch } from "../../store/index.ts";
import { getStation, stationsActions } from "../../store/stations/slice";

export const StationInfoPage: FC = () => {
  const pageData = useStationInfo();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getStation(id))
      .catch(()=>dispatch(stationsActions.setStationInfo(STATIONS_MOCK.stations[parseInt(id)])))
    return;
  }, [id]);

  return (
    <Container id="station-info-page">
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.STATIONS, path: "../stations" },
          { label: pageData?.short_name || "Станция" },
        ]}
      />
      <Card className="station-info" id="station-info">
        <Container>
          <Card.Img
            className="card-image"
            src={pageData?.photo_url || DEFAULT_PHOTO_URL}
          />
          <Card.Title className="largeText">{pageData?.full_name || 'Зарядная станция'}</Card.Title>
        </Container>
        <Card.Body className="card-body">
          <Card.Text className="bold">Адрес станции:</Card.Text>
          <Card.Text>{pageData?.address || '–'}</Card.Text>
          <Card.Text className="bold">Описание:</Card.Text>
          <Card.Text>{pageData?.description || '–'}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
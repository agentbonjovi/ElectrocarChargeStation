import "./StationsModPage.css";
import { FC, useEffect} from "react";
import { Button, Card} from "react-bootstrap";
import { useAppDispatch } from "../../store/index.ts";
import { ROUTES } from "../../Routes.tsx";
import { useUserGroup } from "../../store/user/selectors.ts";
import { useNavigate } from "react-router-dom";
import { useStations } from "../../store/stations";
import { StationModCard } from "../../components/StationModCard/StationModCard.tsx";
import { getStations, stationsActions } from "../../store/stations/slice.ts";

export const StationsModPage: FC = () => {
    const userGroup = useUserGroup()
    const navigate = useNavigate()
    const stations = useStations()
    const dispatch = useAppDispatch()

    useEffect(()=>{
      dispatch(stationsActions.clearStationInfo())
    },[])
    useEffect(()=>{
        if(userGroup!="power_analitic") navigate(`${ROUTES.FORBIDDEN}`)
      },[userGroup])

    useEffect(() => {
      const interval = setInterval(() => {
        dispatch(getStations(""));
      }, 2000);
  
      return () => clearInterval(interval);
    });

    return (
      <div className="stations-mod-container">
          <div className="stations-mod-header">
            <h1>Зарядные станции</h1>
          </div>
        <div className="stations-mod-body">
        <Card className="reports-info arnold-gitker" id="reports-info">
        <Card.Body id="card-body"className="card-body arnold-gitker">
          <Card id="header-card-mod" className="header-card">
            <Card.Text style={{marginLeft:35,marginBottom:0}}>Фото</Card.Text>
            <Card.Text style={{marginLeft:55,marginBottom:0}}>Название</Card.Text>
            <Card.Text style={{marginLeft:20,marginBottom:0,textWrap:"nowrap"}}>Время работы</Card.Text>
            <Card.Text style={{marginLeft:165,marginBottom:0}}>Описание</Card.Text>
            <Card.Text style={{marginLeft:210,marginBottom:0}}></Card.Text>
            <Button variant="secondary" onClick={()=>navigate(`${ROUTES.CHANGESTATION}/new`)}>Новая станция</Button>
          </Card>
        </Card.Body>
        </Card>
        {!stations?.length ? (
          <div>
          </div>
        ) : (stations.map((item, index) => (
            <div className="report-card-col" key={index}>
              <StationModCard {...item}/>
            </div>
          ))
        )}
        </div>
    </div>
  );
};
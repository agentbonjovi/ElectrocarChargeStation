import "./AllReportsPage.css";
import { FC, useEffect, useState } from "react";
import { Container, Card, Spinner, Button } from "react-bootstrap";
import { ReportSmallInfo } from "../../components/ReportSmallInfo/ReportSmallInfo.tsx";
import { useAppDispatch } from "../../store/index.ts";
import { useCreatorName, useEndDate, useReports, useStartDate, useStatus } from "../../store/reports";
import { getReports, reportsActions } from "../../store/reports/slice";
import { useUserGroup } from "../../store/user/selectors.ts";

export const AllReportsPage: FC = () => {
    const dispatch = useAppDispatch();
    const reports = useReports();
    const status = useStatus();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const userGroup = useUserGroup();
    const creatorName = useCreatorName();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      onApplyFilter()
    }, []);

    const onApplyFilter = () =>{
      setLoading(true)
      dispatch(getReports({status:status,startDate:startDate,endDate:endDate}))
        .then(() => setLoading(false))
        return;
    }
    useEffect(() => {
      const interval = setInterval(() => {
        dispatch(getReports({status:status,startDate:startDate,endDate:endDate}));
      }, 2000);
      
       return () => clearInterval(interval);
    });

    return (
    <Container id="reports-page">
      <Card className="reports-header">
      <Container>
          <Card.Title className="largeText">{userGroup=="power_analitic"?"Отчеты пользователей":"Отчеты пользователя"}</Card.Title>
          <div className="reports-filters">
            <select id="status-filter" name="Статусы" value={status} onChange={(event) => dispatch(reportsActions.setStatusFilter(event.target.value.trim()))}>
              <option value="">Все</option>
              <option value="Formed">Сформирован</option>
              <option value="Completed">Завершен</option>
              <option value="Rejected">Отклонен</option>
            </select>
            <input
              className="date-filter"
              value={startDate}
              onChange={(event) => dispatch(reportsActions.setStartDate(event.target.value.trim()))}
              type="date"
            ></input>
            <h2>-</h2>
            <input
              className="date-filter"
              value={endDate}
              onChange={(event) => dispatch(reportsActions.setEndDate(event.target.value.trim()))}
              type="date"
            ></input>
            <input
              placeholder="Создатель"
              className="creator-filter"
              value={creatorName}
              onChange={(event) => dispatch(reportsActions.setCreatorName(event.target.value.trim()))}
            ></input>
            <Button variant="secondary" onClick={onApplyFilter}>Фильтр</Button>
          </div>
        </Container>
      </Card>
      <Card className="reports-info " id="reports-info">
        <Card.Body className="card-body">
        <div className="report-card-col">
          <Card className="header-card">
          <Card.Text className="report-card-id">Отчет №</Card.Text>
          <Card.Text className="report-card-date">Дата отчета</Card.Text>
        <Card.Text className="report-card-status">Статус</Card.Text>
        <Card.Text className="report-card-formed">Дата формирования</Card.Text>
        <Card.Text className="report-card-temperature">Суммарное потребление</Card.Text>
        {userGroup=="power_analitic" && (
          <Card.Text className="report-card-username">Создатель</Card.Text>
        )}
        <Card.Text className="report-card-text"></Card.Text>
          </Card>
        </div>
        {loading && (
        <div className="loadingBg">
          <Spinner animation="border" />
        </div>)
        }
        {!loading &&
        (!reports?.length ? (
          <div>
          </div>
        ) : (reports.map((item, index) => (
            <div className="report-card-col" key={index}>
              <ReportSmallInfo {...item}/>
            </div>
          ))
        ))}
        </Card.Body>
      </Card>
    </Container>
  );
};
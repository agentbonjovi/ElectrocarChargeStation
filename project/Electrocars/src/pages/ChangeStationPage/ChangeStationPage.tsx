import { FC, useEffect, useState } from "react"
import "./ChangeStationPage.css"
import { useNavigate, useParams } from "react-router-dom"
import { addPic, changeStation, createStation, getStation } from "../../store/stations/slice"
import { useAppDispatch } from "../../store"
import { useStationInfo } from "../../store/stations"
import { useUserGroup } from "../../store/user"
import { ROUTES } from "../../Routes"
import { StationInputField } from "../../components/StationInputField/StationInputField"
import { Button } from "react-bootstrap"

export const ChangeStationPage: FC = () =>{
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const stationInfo = useStationInfo()
    const userGroup = useUserGroup()
    const navigate = useNavigate()
    const [mode, setMode] = useState("change")
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const formData = new FormData(event.currentTarget)
        const shortName = formData.get("shortName")?.toString() ?? "";
        const fullName = formData.get("fullName")?.toString() ?? "";
        const address = formData.get("address")?.toString() ?? "";
        const workTime = formData.get("worktime")?.toString() ?? "";
        const description = formData.get("description")?.toString() ?? "";
        const image = formData.get("image")
        if (shortName === "" || fullName === "" || address === "" || workTime === "") {
            return; 
        }
        if (mode == "create") {
            dispatch(createStation({
                short_name: shortName,
                full_name: fullName,
                address: address,
                work_time: workTime,
                description: description
            }))
                .unwrap()
                .then((createdStation) => {
                    
                    if (image instanceof File) {
                        dispatch(addPic({ id: createdStation.id?.toString() || '0', file: image }));
                    }
                })
                .catch((error) => {
                    console.error("Failed to create station:", error);
                });
        } else {
            if(!id) return;
            dispatch(changeStation({
                id: id,
                station: {
                    short_name: shortName,
                    full_name: fullName,
                    address: address,
                    work_time: workTime,
                    description: description
                }
            }))
            if (image instanceof File) {
                dispatch(addPic({ id: stationInfo?.id?.toString() || '0', file: image }));
            }
        }
        navigate(`${ROUTES.STATIONSMOD}`)
    }

    useEffect(()=>{
        if(userGroup!="power_analitic") navigate(`${ROUTES.FORBIDDEN}`)
    },[userGroup])

    useEffect(() => {
        if (!id) return;
        if (id == "new") {setMode("create"); return;} else setMode("change")
        dispatch(getStation(id))
        return;
      }, [id]);

    return(
    <div className="change-station-page">
        <div className="change-stations-header">
            <h1>{mode == 'change'?"Изменение станции":"Создание станции"}</h1>
        </div>
        <form className="change-stations-body" onSubmit={handleSubmit}>
                <StationInputField 
                    inputFieldName="Название*" 
                    onChangeValue={()=>{return}} 
                    inputType="text" name="shortName"
                    value={stationInfo?stationInfo.short_name:""}>
                </StationInputField>
                <StationInputField 
                    inputFieldName="Полное название*" 
                    onChangeValue={()=>{return}} 
                    inputType="text" name="fullName"
                    value={stationInfo?stationInfo.full_name:""}>
                </StationInputField>
                <StationInputField 
                    inputFieldName="Адрес*" 
                    onChangeValue={()=>{return}} 
                    inputType="text" name="address"
                    value={stationInfo?stationInfo.address:""}>
                </StationInputField>
                <StationInputField
                    inputFieldName="Время работы*"
                    onChangeValue={()=>{return}}
                    inputType="text"
                    name="worktime"
                    value={stationInfo?stationInfo.work_time:""}>
                </StationInputField>
                <div className="station-input-field">
                    <h5>Описание</h5>
                    <textarea defaultValue={stationInfo?(stationInfo.description)?stationInfo.description:"":""} name="description" style={{height:200}}></textarea>
                </div>
                <div className="station-input-field">
                    <h5>Фото станции</h5>
                    <input type="file" accept="image/png" name="image"></input>
                </div>
                <Button variant="secondary" style={{marginTop:25,width:200,marginLeft:"auto",marginRight:"auto"}} type="submit">Сохранить</Button>
        </form>
    </div>
)
}
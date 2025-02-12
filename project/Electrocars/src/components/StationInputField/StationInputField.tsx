import {FC, HTMLInputTypeAttribute} from 'react'
import './StationInputField.css'
interface IStationInputProps{
    inputFieldName: string
    onChangeValue: () => void
    inputType: HTMLInputTypeAttribute
    name: string
    value?: string | null
}
export const StationInputField: FC<IStationInputProps> = ({inputFieldName,onChangeValue,inputType,name,value}) => {
    return(
        <div className="station-input-field">
            <h5>{inputFieldName}</h5>
            <input defaultValue={value||""} required name={name} type={inputType} onChange={onChangeValue}></input>
        </div>
    )
}
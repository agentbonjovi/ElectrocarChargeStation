import { IStationsResult } from "./ElectrocarsAPI";

export const STATIONS_MOCK: IStationsResult = {
    stations_count: 0,
    current_report: undefined,
    stations:[
        {
            id:0,
            photo_url:'/0.png',
            short_name:'Энергия Москвы',
            full_name:'Зарядная станция "Энергия Москвы"',
            address:'115054, г.Москва, ул. Бахрушина, 20',
            description:"Типы подключения зарядного устройства: type 2. Станция рассчитана на подключение до 2-х автомобилей одновременно.",
            work_time:"круглосуточно"
        },
        {
            id:1,
            photo_url:'/1.png',
            short_name:'Фора Charging Station',
            full_name:'Зарядная станция "Фора"',
            address:'142770, г.Москва, Коммунарка, стоянка гипермаркета "Глобус"',
            description: "Типы подключения зарядного устройства: type 2 - 22.0 кВт, розетка - 3.6 кВт. Станция рассчитана на подключение одного автомобиля.",
            work_time:"круглосуточно"
        },
        {
            id:2,
            photo_url:'/2.png',
            short_name:'EV-Time Charging Station',
            full_name:'Зарядная станция "EV-Time"',
            address:'121353, г.Москва, МКАД, 51-й километр',
            description: "Типы подключения зарядного устройства: type 2 - 43.0 кВт, CHAdeMO - 50.0 кВт, CCS - 50.0 кВт. Станция рассчитана на подключение до 3-х автомобилей одновременно.",
            work_time:"07:00-22:00"
        },
        {
            id:3,
            photo_url:'/3.png',
            short_name:'"МосЭнерго" Charging Station',
            full_name:'Зарядная станция "МосЭнерго"',
            address:'119048, Москва, ул. Савельева',
            description:"Типы подключения зарядного устройства: type 2 - 22.0 кВт. Станция рассчитана на подключение одного автомобииля.",
            work_time:"круглосуточно"
        }
    ],
}

export const DEFAULT_PHOTO_URL: string = "/no_photo.png"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api, report, temperatureReport } from "../../api"


const filterByUser = (reports:report[],username:string) => {
    let filteredReports: report[]  = Array()
    for (let index = 0; index < reports.length; index++) {
        const report = reports[index];
        if (report.creator_id?.startsWith(username)) filteredReports.push(report)
    }
    return filteredReports
}

const reportsSlice = createSlice({
    name: "reports",
    initialState: {
        reports: [] as report[],
        reportInfo: null as temperatureReport|null,
        status: "",
        startDate: "",
        endDate: "",
        creatorName: "",
    },
    reducers: {
        setReportInfo(state,{payload}){
            state.reportInfo = payload
        },
        setStatusFilter(state,{payload}){
            state.status = payload
        },
        setStartDate(state,{payload}){
            state.startDate = payload
        },
        setEndDate(state,{payload}){
            state.endDate = payload
        },
        setCreatorName(state,{payload}){
            state.creatorName = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReports.fulfilled,(state,action)=>{
            state.reports = filterByUser(action.payload,state.creatorName)
        })
        builder.addCase(getReportInfo.fulfilled,(state,action)=>{
            state.reportInfo = action.payload
        })
    }
    
})

export const { actions: reportsActions, reducer: reportsReducer } = reportsSlice

export const getReports = createAsyncThunk<report[],{status?:string,startDate:string,endDate:string}>
    ('reports/getReports', async (data)=>
    api.reports.reportsList(data).then(({data})=>data))

export const getReportInfo = createAsyncThunk<temperatureReport,string>('reports/getReport', async (id) =>
    api.reports.reportsRead(id).then(({data})=>data))

export const changeReportDate = createAsyncThunk<void,{id:string,data:string}>('reports/change', async (data) =>
    api.reports.reportsUpdate(data.id,data.data).then(()=>{return}))

export const formReport = createAsyncThunk<void,string>('reports/form',async (id)=> 
    api.reports.reportsFormUpdate(id).then(()=>{return}))

export const deleteReport = createAsyncThunk<void,string>('reports/delete', async (id)=>
    api.reports.reportsDeleteDelete(id).then(()=>{return}))

export const confirmReport = createAsyncThunk<void,{id:string,data:0|1}>('report/confirm',async (data) =>
    api.reports.reportsConfirmUpdate(data.id,data.data).then(()=>{return}))
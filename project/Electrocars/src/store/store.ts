import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from "./data/slice.ts";
import { userReducer } from './user';
import { stationsReducer } from './stations/index.ts';
import { reportsReducer } from './reports';

export const store = configureStore({
    reducer: combineReducers({
        data: dataReducer,
        user: userReducer,
        stations: stationsReducer,
        reports: reportsReducer,
    }),
});
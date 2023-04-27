import { combineReducers, configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/service/serviceSlice';
import reviewReducer from './slices/review/reviewSlice';
import doctorReducer from './slices/doctor/doctorSlice';
import offerReducer from './slices/offer/offerSlice';

const rootReducer = combineReducers({
    serviceReducer,
    doctorReducer,
    offerReducer,
    reviewReducer,



export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

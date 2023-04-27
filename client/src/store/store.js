import { combineReducers, configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/service/serviceSlice';
import doctorReducer from './slices/doctor/doctorSlice';
import offerReducer from './slices/offer/offerSlice';

const rootReducer = combineReducers({
    serviceReducer,
    doctorReducer,
    offerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

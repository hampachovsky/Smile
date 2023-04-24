import { combineReducers, configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/service/serviceSlice';

const rootReducer = combineReducers({
    serviceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

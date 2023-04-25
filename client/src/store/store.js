import { combineReducers, configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/service/serviceSlice';
import reviewReducer from './slices/review/reviewSlice';

const rootReducer = combineReducers({
    serviceReducer,
    reviewReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

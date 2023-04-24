import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../../constants/loadingStatus';
import { fetchServices } from './thunk';

export const serviceAdapter = createEntityAdapter({
    selectId: (service) => service.id,
});

const initialState = serviceAdapter.getInitialState({
    status: loadingStatus.IDLE,
    error: null,
});

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        resetServicesState: (state) => {
            serviceAdapter.removeAll(state);
            state.status = loadingStatus.IDLE;
            state.error = null;
        },
        setLoadingStatus: (state) => {
            state.status = loadingStatus.LOADING;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.pending, (state) => {
            serviceSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchServices.fulfilled, serviceAdapter.upsertMany);
    },
});

export const { increment } = serviceSlice.actions;

export default serviceSlice.reducer;

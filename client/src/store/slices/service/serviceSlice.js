import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../../constants/loadingStatus';
import { fetchCreateService, fetchDeleteService, fetchServices, fetchUpdateService } from './thunk';

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
        setSuccessStatus: (state) => {
            state.status = loadingStatus.SUCCESS;
            state.error = null;
        },
        setErrorStatus: (state, error) => {
            state.status = loadingStatus.ERORR;
            if (typeof error === 'string') {
                state.error = error;
            } else {
                state.error = 'unknown error';
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, payload) => {
            serviceAdapter.setAll(state, payload);
            serviceSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchServices.pending, (state) => {
            serviceSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchServices.rejected, (state, { payload }) => {
            serviceSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchCreateService.fulfilled, (state, payload) => {
            serviceAdapter.addOne(state, payload);
            serviceSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchCreateService.pending, (state) => {
            serviceSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchCreateService.rejected, (state, { payload }) => {
            serviceSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchUpdateService.fulfilled, (state, payload) => {
            serviceAdapter.setOne(state, payload);
            serviceSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchUpdateService.pending, (state) => {
            serviceSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchUpdateService.rejected, (state, { payload }) => {
            serviceSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchDeleteService.fulfilled, (state, payload) => {
            serviceAdapter.removeOne(state, payload);
            serviceSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchDeleteService.pending, (state) => {
            serviceSlice.caseReducers.setLoadingStatus(state);
        });
    },
});

export default serviceSlice.reducer;

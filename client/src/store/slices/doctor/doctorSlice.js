import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../../constants/loadingStatus';
import { fetchCreateDoctor, fetchDeleteDoctor, fetchDoctors, fetchUpdateDoctor } from './thunk';

export const doctorAdapter = createEntityAdapter({
    selectId: (doctor) => doctor.id,
});

const initialState = doctorAdapter.getInitialState({
    status: loadingStatus.IDLE,
    error: null,
});

export const doctorSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        resetDoctorsState: (state) => {
            doctorAdapter.removeAll(state);
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
        builder.addCase(fetchDoctors.fulfilled, (state, payload) => {
            doctorAdapter.setAll(state, payload);
            doctorSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchDoctors.pending, (state) => {
            doctorSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchDoctors.rejected, (state, { payload }) => {
            doctorSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchCreateDoctor.fulfilled, (state, payload) => {
            doctorAdapter.addOne(state, payload);
            doctorSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchCreateDoctor.pending, (state) => {
            doctorSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchCreateDoctor.rejected, (state, { payload }) => {
            doctorSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchUpdateDoctor.fulfilled, (state, payload) => {
            doctorAdapter.setOne(state, payload);
            doctorSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchUpdateDoctor.pending, (state) => {
            doctorSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchUpdateDoctor.rejected, (state, { payload }) => {
            doctorSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchDeleteDoctor.fulfilled, (state, payload) => {
            doctorAdapter.removeOne(state, payload);
            doctorSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchDeleteDoctor.pending, (state) => {
            doctorSlice.caseReducers.setLoadingStatus(state);
        });
    },
});

export default doctorSlice.reducer;

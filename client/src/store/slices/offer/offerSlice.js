import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../../constants/loadingStatus';
import { fetchCreateOffer, fetchDeleteOffer, fetchOffers, fetchUpdateOffer } from './thunk';

export const offerAdapter = createEntityAdapter({
    selectId: (doctor) => doctor.id,
});

const initialState = offerAdapter.getInitialState({
    status: loadingStatus.IDLE,
    error: null,
});

export const offerSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        resetDoctorsState: (state) => {
            offerAdapter.removeAll(state);
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
        builder.addCase(fetchOffers.fulfilled, (state, payload) => {
            offerAdapter.setAll(state, payload);
            offerSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchOffers.pending, (state) => {
            offerSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchOffers.rejected, (state, { payload }) => {
            offerSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchCreateOffer.fulfilled, (state, payload) => {
            offerAdapter.addOne(state, payload);
            offerSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchCreateOffer.pending, (state) => {
            offerSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchCreateOffer.rejected, (state, { payload }) => {
            offerSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchUpdateOffer.fulfilled, (state, payload) => {
            offerAdapter.setOne(state, payload);
            offerSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchUpdateOffer.pending, (state) => {
            offerSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchUpdateOffer.rejected, (state, { payload }) => {
            offerSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchDeleteOffer.fulfilled, (state, payload) => {
            offerAdapter.removeOne(state, payload);
            offerSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchDeleteOffer.pending, (state) => {
            offerSlice.caseReducers.setLoadingStatus(state);
        });
    },
});

export default offerSlice.reducer;

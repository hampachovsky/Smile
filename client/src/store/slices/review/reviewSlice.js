import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../../constants/loadingStatus';
import { fetchCreateReview, fetchDeleteReview, fetchReviews } from './thunk';

export const reviewAdapter = createEntityAdapter({
    selectId: (review) => review.id,
});

const initialState = reviewAdapter.getInitialState({
    status: loadingStatus.IDLE,
    error: null,
});

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        resetReviewState: (state) => {
            reviewAdapter.removeAll(state);
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
        builder.addCase(fetchReviews.fulfilled, (state, payload) => {
            reviewAdapter.setAll(state, payload);
            reviewSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchReviews.pending, (state) => {
            reviewSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchReviews.rejected, (state, { payload }) => {
            reviewSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchCreateReview.fulfilled, (state, payload) => {
            reviewAdapter.addOne(state, payload);
            reviewSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchCreateReview.pending, (state) => {
            reviewSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchCreateReview.rejected, (state, { payload }) => {
            reviewSlice.caseReducers.setErrorStatus(state, payload);
        });

        builder.addCase(fetchDeleteReview.fulfilled, (state, payload) => {
            reviewAdapter.removeOne(state, payload);
            reviewSlice.caseReducers.setSuccessStatus(state);
        });
        builder.addCase(fetchDeleteReview.pending, (state) => {
            reviewSlice.caseReducers.setLoadingStatus(state);
        });
    },
});

export default reviewSlice.reducer;

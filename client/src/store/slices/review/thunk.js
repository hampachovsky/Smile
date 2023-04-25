import { createAsyncThunk } from '@reduxjs/toolkit';
import { reviewApi } from '../../../api/reviewApi';

export const fetchReviews = createAsyncThunk('reviews/fetchAll', async () => {
    const response = await reviewApi.getAll();
    return response;
});

export const fetchCreateReview = createAsyncThunk(
    'reviews/fetchCreateReview',
    async (payload, thunkAPI) => {
        try {
            const response = await reviewApi.create(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchDeleteReview = createAsyncThunk('reviews/fetchDeleteReview', async (payload) => {
    await reviewApi.delete(payload);
    return payload;
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { offerApi } from '../../../api/offerApi';

export const fetchOffers = createAsyncThunk('offers/fetchAll', async () => {
    const response = await offerApi.getAll();
    return response;
});

export const fetchCreateOffer = createAsyncThunk(
    'offers/fetchCreateOffer',
    async (payload, thunkAPI) => {
        try {
            const response = await offerApi.create(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchUpdateOffer = createAsyncThunk(
    'offers/fetchUpdateOffer',
    async (payload, thunkAPI) => {
        try {
            const response = await offerApi.update(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchDeleteOffer = createAsyncThunk('offers/fetchDeleteOffer', async (payload) => {
    await offerApi.delete(payload);
    return payload;
});

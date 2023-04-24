import { createAsyncThunk } from '@reduxjs/toolkit';
import { serviceApi } from '../../../api/serviceApi';

export const fetchServices = createAsyncThunk('services/fetchAll', async () => {
    const response = await serviceApi.getAll();
    return response;
});

export const fetchCreateService = createAsyncThunk(
    'services/fetchCreateService',
    async (payload, thunkAPI) => {
        try {
            const response = await serviceApi.create(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchUpdateService = createAsyncThunk(
    'services/fetchUpdateService',
    async (payload, thunkAPI) => {
        try {
            const response = await serviceApi.update(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchDeleteService = createAsyncThunk(
    'services/fetchDeleteService',
    async (payload) => {
        await serviceApi.delete(payload);
        return payload;
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorApi } from '../../../api/doctorApi';

export const fetchDoctors = createAsyncThunk('doctors/fetchAll', async () => {
    const response = await doctorApi.getAll();
    return response;
});

export const fetchCreateDoctor = createAsyncThunk(
    'doctors/fetchCreateDoctor',
    async (payload, thunkAPI) => {
        try {
            const response = await doctorApi.create(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchUpdateDoctor = createAsyncThunk(
    'doctors/fetchUpdateDoctor',
    async (payload, thunkAPI) => {
        try {
            const response = await doctorApi.update(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchDeleteDoctor = createAsyncThunk('doctors/fetchDeleteDoctor', async (payload) => {
    await doctorApi.delete(payload);
    return payload;
});

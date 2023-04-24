import { createAsyncThunk } from '@reduxjs/toolkit';
import { serviceApi } from '../../../api/serviceApi';

export const fetchServices = createAsyncThunk('services/fetchAll', async () => {
    const response = await serviceApi.getAll();
    return response;
});

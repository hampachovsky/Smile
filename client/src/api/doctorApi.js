import { instance } from './config';

export const doctorApi = {
    async getAll() {
        const response = await instance.get('/doctors/all');
        return response.data;
    },
    async create(payload) {
        const response = await instance.post('/doctors', payload);
        return response.data;
    },
    async update(payload) {
        const response = await instance.put(`/doctors/${payload.id}`, payload);
        return response.data;
    },
    async delete(id) {
        const response = await instance.delete(`/doctors/${id}`);
        return response.data;
    },
};

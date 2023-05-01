import { instance } from './config';

export const serviceApi = {
    async getAll() {
        const response = await instance.get('/services/all');
        return response.data;
    },
    async create(payload) {
        const response = await instance.post('/services', payload);
        return response.data;
    },
    async update(payload) {
        const response = await instance.put(`/services/${payload.id}`, payload);
        return response.data;
    },
    async delete(id) {
        const response = await instance.delete(`/services/${id}`);
        return response.data;
    },
};

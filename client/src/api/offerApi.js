import { instance } from './config';

export const offerApi = {
    async getAll() {
        const response = await instance.get('/offers/all');
        return response.data;
    },
    async create(payload) {
        const response = await instance.post('/offers', payload);
        return response.data;
    },
    async update(payload) {
        const response = await instance.put(`/offers/${payload.id}`, payload);
        return response.data;
    },
    async delete(id) {
        const response = await instance.delete(`/offers/${id}`);
        return response.data;
    },
};

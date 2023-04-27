import { instance } from './config';

export const reviewApi = {
    async getAll() {
        const response = await instance.get('/reviews/all');
        return response.data;
    },
    async create(payload) {
        const response = await instance.post('/reviews', payload);
        return response.data;
    },
    async update(payload) {
        const response = await instance.put(`/reviews/${payload.id}`, payload);
        return response.data;
    },
    async delete(id) {
        const response = await instance.delete(`/reviews/${id}`);
        return response.data;
    },
};

import { instance } from './config';

export const adminApi = {
    async login(payload) {
        const response = await instance.post('/admin', payload);

        return response.data;
    },
};

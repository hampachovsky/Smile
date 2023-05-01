import axios from 'axios';

export const mailerApi = {
    async askQuestion(payload) {
        const response = await axios.post('https://formspree.io/f/mgebrglr', payload);
        return response.data;
    },
};

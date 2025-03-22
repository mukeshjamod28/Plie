import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://3.7.81.243/projects/plie-api/public/api';

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default api;
import axios from 'axios';

export const winesApi = axios.create({
    baseURL: "https://api.sampleapis.com/wines/reds"
});
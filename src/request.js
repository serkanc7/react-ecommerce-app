import axios from 'axios';

const BASE_URL = "https://bootcampapi.techcs.io/api/fe/v1/";
const token = window.localStorage.getItem('token');

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Authorization': `Bearer ${token}` }
})

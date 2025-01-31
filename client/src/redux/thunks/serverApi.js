import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export const serverApi = axios.create({
   baseURL: API_URL 
})

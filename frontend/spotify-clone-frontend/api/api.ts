import { PlainObject } from "@/types/globalTypes";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


interface apiWrapper {
  get: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  post: (url: string, data: PlainObject, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  put: (url: string, data: PlainObject, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  delete: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  
}
const BASE_URL = "localhost:3001/api";
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const updateApiToken = (token:string|null)=>{
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// API wrapper functions
export const apiWrapper = {
    get: async (url:string, config = {}) => {
        try {
            const response = await api.get(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    post: async (url:string, data, config = {}) => {
        try {
            const response = await api.post(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    put: async (url, data, config = {}) => {
        try {
            const response = await api.put(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    delete: async (url, config = {}) => {
        try {
            const response = await api.delete(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default api;
import axios from 'axios';

export const apiClient = axios.create({});

apiClient.interceptors.request.use(async (config) => {
  return config;
});

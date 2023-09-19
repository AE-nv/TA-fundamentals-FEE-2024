import { apiClient } from '@/services/api.service';
import type { AxiosInstance } from 'axios';

export interface IServiceContainer {
  apiClient: AxiosInstance;
}

export const serviceContainer = {
  apiClient,
};

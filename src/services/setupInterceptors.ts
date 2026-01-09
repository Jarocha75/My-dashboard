import { api } from "@/services/apiClient";
import type { AxiosError } from "axios";

export const setupInterceptors = (
  getToken: () => string | null,
  logout: () => void
) => {
  // Request interceptor - add token to all requests
  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - handle errors
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message?: string }>) => {
      // Handle 401 Unauthorized - token expired or invalid
      if (error.response?.status === 401) {
        logout();
        window.location.href = "/auth/signin";
      }

      // Extract error message from response or use default
      const message =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred";

      return Promise.reject(new Error(message));
    }
  );
};

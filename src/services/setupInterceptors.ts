import api from "@/services/apiClient";

export const setupInterceptors = (getToken: () => string | null) => {
  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

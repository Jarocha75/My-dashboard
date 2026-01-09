import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<T[]>(this.endpoint, config);
    return res.data;
  };

  get = async (id: string) => {
    const res = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return res.data;
  };

  post = async (data: T) => {
    const res = await axiosInstance.post<T>(this.endpoint, data);
    return res.data;
  };

  put = async (id: string, data: Partial<T>) => {
    const res = await axiosInstance.put<T>(`${this.endpoint}/${id}`, data);
    return res.data;
  };

  delete = async (id: string) => {
    await axiosInstance.delete<T>(`${this.endpoint}/${id}`);
  };
}

export { axiosInstance as api };
export default APIClient;

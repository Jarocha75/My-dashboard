import api from "@/services/apiClient";
import { type User } from "@/context/authContext";

export interface LoginResponse {
  token: string;
  user: User;
}

export const loginRequest = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const { data } = await api.get<User[]>(
    `/users?email=${email}&password=${password}`
  );

  if (data.length === 0) {
    throw new Error("Invalid email or password");
  }

  return {
    token: "mock-token",
    user: data[0],
  };
};

export const getMe = async (): Promise<User> => {
  const { data } = await api.get<User>("/user/1");
  return data;
};

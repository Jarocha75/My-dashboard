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
    token: "mock-token-" + data[0].id,
    user: data[0],
  };
};

export const getMe = async (): Promise<User> => {
  const { data } = await api.get<User>("/users/1");
  return data;
};

export interface SignUpPayload {
  email: string;
  password: string;
}

export const signUpRequest = async (payload: SignUpPayload): Promise<User> => {
  const { data } = await api.post<User>("/users", payload);

  return data;
};

export const facebookLoginRequest = async (): Promise<LoginResponse> => {
  const { data } = await api.get<User[]>(
    "/users?provider=facebook&provider_id=1"
  );

  if (!data.length) {
    throw new Error("No user found with Facebook provider ID");
  }

  return {
    token: "mock-facebook-token" + data[0].id,
    user: data[0],
  };
};

// Neskôr reálny backend endpoint:
/*
export const facebookLoginRequest = async (
  facebookToken: string
): Promise<LoginResponse> => {
  const { data } = await api.post("/auth/facebook", {
    token: facebookToken,
  });

  return data;
};
*/

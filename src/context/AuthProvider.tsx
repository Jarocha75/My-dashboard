import { getMe } from "@/services/auth";
import { setupInterceptors } from "@/services/setupInterceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AuthContext from "./authContext";

const TOKEN_KEY = "auth_token";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!getToken(),
  });

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    queryClient.clear();
  };

  useEffect(() => {
    setupInterceptors(getToken, logout);
  }, []);

  const login = (token: string, user: import("./authContext").User) => {
    localStorage.setItem(TOKEN_KEY, token);
    queryClient.setQueryData(["me"], user);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user || null,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

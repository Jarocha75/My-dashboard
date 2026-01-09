import { getMe } from "@/services/auth";
import { setupInterceptors } from "@/services/setupInterceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AuthContext from "./authContext";

const TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "refresh_token";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!getToken(),
    retry: false,
  });

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    queryClient.setQueryData(["me"], null);
    queryClient.invalidateQueries({ queryKey: ["me"] });
  };

  useEffect(() => {
    setupInterceptors(getToken, getRefreshToken, logout);
  }, []);

  const login = (token: string, user: import("./authContext").User, refreshToken?: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
    queryClient.setQueryData(["me"], user);
    // Invalidate all queries to refetch with new token
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] !== "me",
    });
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

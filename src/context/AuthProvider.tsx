import React, { useEffect } from "react";
import AuthContext, { type User } from "./authContext";

const TOKEN_KEY = "access_token";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Simulate fetching user data with the token
      const fetchedUser: User = { id: "1", email: "user@example.com" };
      setUser(fetchedUser);
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem(TOKEN_KEY, token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
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

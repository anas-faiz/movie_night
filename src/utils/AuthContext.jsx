// src/utils/AuthContext.jsx
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const value = useMemo(
    () => ({
      isLoginPage,
      setIsLoginPage,
    }),
    [isLoginPage]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

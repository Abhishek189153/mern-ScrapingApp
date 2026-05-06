import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");

    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));

    setUserInfo(data);
  };

  const logout = () => {
    localStorage.removeItem("userInfo");

    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
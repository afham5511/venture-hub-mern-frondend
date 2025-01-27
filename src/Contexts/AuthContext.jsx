import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000, 
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await localStorage.getItem('@Auth');
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, axiosInstance }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

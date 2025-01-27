import React, { createContext, useState, useContext, useEffect } from 'react';

// Creating the AuthContext
const AuthContext = createContext();

// Creating the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    async()=>{
        const user = await localStorage.getItem('@Auth')
        setUser(user)
    }
  },[])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

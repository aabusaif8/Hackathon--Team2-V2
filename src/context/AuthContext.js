import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    const storedUserId = Cookies.get('userId');
    const storeUsername = Cookies.get('username');
    if (token && storedUserId && storeUsername) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setUsername(storeUsername);
    }
  }, []);

  const login = (token, userId, username) => {
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' });
    Cookies.set('userId', userId, { expires: 7, secure: true, sameSite: 'Strict' });
    Cookies.set('username', username, { expires: 7, secure: true, sameSite: 'Strict' });
    setIsLoggedIn(true);
    setUserId(userId);
    setUsername(username);
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    Cookies.remove('username');
    setIsLoggedIn(false);
    setUserId(null);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the authentication context
const AuthContext = createContext();

// Create the authentication provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to connect the user
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to disconnect the user
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;

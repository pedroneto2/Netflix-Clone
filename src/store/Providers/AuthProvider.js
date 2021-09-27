import AuthCtx from "../context/AuthCtx";
import useAuth from "./useAuth";

const AuthProvider = ({ children }) => {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthCtx.Provider
      value={{ authenticated, loading, handleLogin, handleLogout }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;

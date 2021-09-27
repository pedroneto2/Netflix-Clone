import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const fakeValidateToken = (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(token === "1234");
    }, 1000);
  });
};

const fakeRetrieveToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1234");
    }, 1000);
  });
};

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history2 = useHistory(); // not working =( why????

  const handleLogin = async () => {
    setLoading(true);
    const token = await fakeRetrieveToken();
    localStorage.setItem("token", token);
    setAuthenticated(true);
    setLoading(false);
    history2.push("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    history2.push("/");
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const isTokenValid = await fakeValidateToken(token);
        isTokenValid ? setAuthenticated(true) : setAuthenticated(false);
      }
      setLoading(false);
    })(); //instantly call async arrow function
  }, []);

  return { authenticated, loading, handleLogin, handleLogout };
}

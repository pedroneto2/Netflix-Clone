import { useContext } from "react";
import { Redirect, Route } from "react-router";

import AuthCtx from "../store/context/AuthCtx";

import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const CustomRoute = ({ isPrivate, path, ...rest }) => {
  const { authenticated, loading } = useContext(AuthCtx);
  if (loading) {
    return <LoadingScreen />;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  if (path === "/login" && authenticated) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} />;
};

export default CustomRoute;

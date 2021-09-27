import React, { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import FeatureBox from "./components/FeatureBox/FeatureBox";

import CustomRoute from "./utils/CustomRoute";

import LanguageCtx from "./store/context/LanguageCtx";

function App() {
  const { userLocation } = useContext(LanguageCtx);

  return (
    <Switch>
      <Route path="/feature" render={() => <FeatureBox />} />
      <CustomRoute path="/login" render={() => <LoginPage />} />
      <CustomRoute isPrivate path="/home" render={() => <HomePage />} />
      <Route
        path="/:language"
        render={(routeProps) =>
          routeProps.match.params.language === userLocation ? (
            <LandingPage {...routeProps} />
          ) : (
            <Redirect push to={"/" + userLocation} />
          )
        }
      />
      <Route
        path="/"
        render={() => <Redirect push to={"/" + userLocation} />}
      />
    </Switch>
  );
}

export default App;

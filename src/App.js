import React, { useEffect, useState } from "react";
import LanguageCtx from "./components/LanguageCtx";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import FeatureBox from "./components/FeatureBox/FeatureBox";

import languagePack from "./languagePack.json";
import logo from "./imgs/logos/netflix-logo.png";

const retrieveLanguage = (languageCode) => {
  let language = "English";
  Object.keys(languagePack).forEach((key) => {
    languagePack[key].countryCode.find((code) => {
      if (code === languageCode) {
        language = key;
        return true;
      }
      return false;
    });
  });
  return language;
};

const getUserLocation = (setUserLocation, setLanguage) => {
  fetch("https://random-data-api.com/api/address/random_address")
    .then((response) => response.json())
    .then((data) => {
      const language = retrieveLanguage(data.country_code.toLowerCase());
      setLanguage(language);
      setUserLocation(data.country_code.toLowerCase());
    });
};

function App() {
  const [language, setLanguage] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation(setUserLocation, setLanguage);
  }, []);

  return !userLocation ? (
    <div className="loading-screen">
      <img src={logo} alt="loading" />
    </div>
  ) : (
    <Router>
      <LanguageCtx.Provider value={{ languagePack, language, setLanguage }}>
        <Switch>
          <Route path="/feature" render={() => <FeatureBox />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/home" render={() => <HomePage />} />
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
      </LanguageCtx.Provider>
    </Router>
  );
}

export default App;

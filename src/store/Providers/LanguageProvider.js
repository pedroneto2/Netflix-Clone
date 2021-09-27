import { useState, useEffect } from "react";
import LanguageCtx from "../context/LanguageCtx";
import languagePack from "./languagePack.json";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

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

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation(setUserLocation, setLanguage);
  }, []);
  return (
    <LanguageCtx.Provider
      value={{ languagePack, language, userLocation, setLanguage }}
    >
      {userLocation ? children : <LoadingScreen />}
    </LanguageCtx.Provider>
  );
};

export default LanguageProvider;

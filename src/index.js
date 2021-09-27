import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";

import LanguageProvider from "./store/Providers/LanguageProvider";
import AuthProvider from "./store/Providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

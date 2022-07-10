import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
// eslint-disable-next-line
import { useTranslation, initReactI18next } from "react-i18next";
import ten from './locals/en/translation.json'
import tde from './locals/de/translation.json'
import tmarathi from './locals/marathi/translation.json'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
  
    resources: {
      en: {
        translation: ten
      },
      de: {
        translation: tde
      },
      marathi: {
        translation: tmarathi
      }
    
    },
   
 
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

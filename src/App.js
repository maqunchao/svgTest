import React, { useState, useEffect } from 'react';

import downloadImg from './logo.svg';

import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import './App.css';


i18n.use(initReactI18next).init({
    // the translations
    // (tip move them in a JSON file and import them)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next'
        }
      },
      zh: {
        translation: {
          'Welcome to React': '欢迎使用 React 和 react-i18next'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });


function App() {

  const { t } = useTranslation();

  return (
    <div className="App">

       <h2>{t('Welcome to React')}</h2>;


    </div >
  );
}

export default App;

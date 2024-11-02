import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonTW from './i18n/tc/common.json'
import commonEN from './i18n/en/common.json'


const resources = {
    zh_TW: {
      translation: {
          common: commonTW,
      }
    },
    en: {
      translation: {
          common: commonEN,
      }
    },
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "zh_TW", 
  
      interpolation: {
        escapeValue: false 
      }
    });
  
    export default i18n;
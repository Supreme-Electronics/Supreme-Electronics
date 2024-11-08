import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonTW from './i18n/tc/common.json'
import commonEN from './i18n/en/common.json'
import surveyTW from './i18n/tc/survey.json'
import surveyEN from './i18n/en/survey.json'
import landingTW from './i18n/tc/landing.json'
import landingEN from './i18n/en/landing.json'


const resources = {
    zh_TW: {
      translation: {
          common: commonTW,
          survey: surveyTW,
          landing: landingTW
      }
    },
    en: {
      translation: {
          common: commonEN,
          survey: surveyEN,
          landing: landingEN
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
import en from './translations/en.json';
import tr from './translations/tr.json';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';

const languageDetector = {
    type:'languageDetector',
    async: true,
    detect: (callback)=>{
      return callback(Localization.locale.split("-")[0])
    },
    init:()=>{},
    cacheUserLanguage:()=>{}
}
i18next
    .use(languageDetector)
    .use(initReactI18next)
.init({
    fallbackLng: 'en',
    resources:{
        en,
        tr
    },
    react:{
        useSuspense: false
    }
});

export default i18next;

import en from './translations/en.json';
import tr from './translations/tr.json';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next)
.init({
    lng: 'en',
    resources:{
        en,
        tr
    },
    react:{
        useSuspense: false
    }
});

export default i18next;

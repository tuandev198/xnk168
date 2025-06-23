
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import vi from "./locales/vi/common.json";

export const initI18n = () => {
  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: en },
          vi: { translation: vi },
        },
        fallbackLng: "vi",
        interpolation: { escapeValue: false },
      });
  }
};

export default i18n;

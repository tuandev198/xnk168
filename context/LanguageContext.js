"use client"; 
// context/LanguageContext.js
import { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en";
import vi from "../locales/vi";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const [dictionary, setDictionary] = useState(en);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLocale(storedLang);
      setDictionary(storedLang === "vi" ? vi : en);
    }
  }, []);

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    setLocale(lang);
    setDictionary(lang === "vi" ? vi : en);
  };

  return (
    <LanguageContext.Provider value={{ locale, dictionary, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

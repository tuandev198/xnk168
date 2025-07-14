import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={() => changeLanguage(locale === "vi" ? "en" : "vi")}
      >
        {locale === "vi" ? "Chuyển sang English" : "Switch to Vietnamese"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

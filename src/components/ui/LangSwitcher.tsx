import { useLanguage } from "../../i18n/LanguageProvider";

const LangSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <a className="flex items-center gap-1 cursor-pointer" onClick={toggleLanguage}>
      {language === "en" ? (
        <img src="https://flagcdn.com/28x21/us.png" alt="EN" width="28" />
      ) : (
        <img src="https://flagcdn.com/28x21/tr.png" alt="TR" width="28" />
      )}
      <span className="ml-1 font-semibold text-white">{language.toUpperCase()}</span>
    </a>
  );
};

export default LangSwitcher;
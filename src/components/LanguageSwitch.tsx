// src/components/LanguageSwitcher.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/langSwitch.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

  const handleLanguageChange = () => {
    const newLang = isEnglish ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="checkbox-wrapper-8 btn w-16 text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white bg-white dark:bg-base-100">
      <input
        type="checkbox"
        id="cb3-8"
        className="tgl tgl-skewed"
        checked={isEnglish}
        onChange={handleLanguageChange}
      />
      <label
        htmlFor="cb3-8"
        data-tg-on="EN"
        data-tg-off="FR"
        className="tgl-btn"
      ></label>
    </div>
  );
};

export default LanguageSwitcher;

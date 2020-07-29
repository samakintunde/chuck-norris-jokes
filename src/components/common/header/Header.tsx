import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="flex justify-between items-center">
      <Link
        className="hover:text-brand-300 font-bold transition-colors duration-300"
        to="/"
      >
        <h1>{t("title")}</h1>
      </Link>
      <select
        className="bg-brand-900 cursor-pointer"
        defaultValue={i18n.language}
        onChange={handleChange}
        name="lang"
      >
        <option value="en-US">{t("languages.english")}</option>
        <option value="fr">{t("languages.french")}</option>
        <option value="ar">{t("languages.arabic")}</option>
      </select>
    </header>
  );
};

export default Header;

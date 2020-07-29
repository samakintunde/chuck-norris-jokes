import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center">
      {t("footer.credits")}{" "}
      <a
        className="text-brand-100 hover:text-brand-300 transition-colors duration-300"
        href="https://github.com/samakintunde37"
      >
        Samakintunde
      </a>
    </footer>
  );
};

export default Footer;

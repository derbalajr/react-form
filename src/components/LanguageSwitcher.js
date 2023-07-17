import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  }
  return (
    <>
      <div className="container language-switcher">
        <label>
          <button onClick={changeLanguage}>
            <FontAwesomeIcon icon={faGlobe} bounce size="xl" />
          </button>
        </label>
      </div>
    </>
  );
}

import "./App.css";
import Individuals from "./components/Individuals/Individuals";
import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  
  return (
    <div dir={t("dir")} lang={t("lang")}>
      <Individuals />
    </div>
  );
}
export default App;

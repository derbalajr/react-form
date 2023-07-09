import "./App.css";
import Individuals from "./components/Individuals/Individuals";
import React from "react";
import { useTranslation } from 'react-i18next';
function App() { 
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.dir()} lang={i18n.language}>
    <Individuals />
    </div>
  );
}
export default App;

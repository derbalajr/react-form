import React from "react";
import { useTranslation } from 'react-i18next';

export default function Translate({sentence, file}) {
  const { t } = useTranslation(file);
  return (
    <>
      {t(sentence)}
    </>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="top-4 right-4 space-x-2">
      <Button onClick={() => changeLanguage("en")} variant="outline">
        EN
      </Button>
      <Button onClick={() => changeLanguage("es")} variant="outline">
        ES
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

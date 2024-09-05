import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "EN",
    resources: {
      EN: {
        translation: {
          homePage: "My day",
          importantPage: "Important",
          DeashBoardPage: "DeashBoard",
          AddTask: "Add a task",
        },
      },
      KA: {
        translation: {
          homePage: "დღის განრიგი",
          importantPage: "მნიშვნელოვნები",
          deashBoardPage: "მართვის პანელი",
          AddTask: "დაამატეთ თასქი",
        },
      },
    },
  });

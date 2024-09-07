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
          TotalTasks: "TotalTasks",
          CompletedTasks: "Completed Tasks",
          LeftTasks: "Left Tasks",
          ImportantTasks: "Important Tasks",
          YourActivities: "Your Activities",
          TaskByStatus: "Task By Status",
          DoneTasks: "Done Tasks",
          Waitingtodo: "Waiting to do",
          Importance: "Importance",
          Completed: "Completed",
          Edit: "Edit",
          Delete: "Delete",
          Complete: "Completed",
        },
      },
      KA: {
        translation: {
          homePage: "დღის განრიგი",
          importantPage: "მნიშვნელოვნები",
          deashBoardPage: "მართვის პანელი",
          AddTask: "დაამატეთ თასქი",
          TotalTasks: "ყველა",
          CompletedTasks: "შესრულებული",
          LeftTasks: "დარჩენილი ",
          ImportantTasks: "მნიშვნელოვანი",
          YourActivities: "შენი აქტივობები",
          TaskByStatus: "სტატუსის მიხედვით",
          DoneTasks: "დასრულებული",
          Waitingtodo: "მიმდინარე",
          Importance: "მნიშვნელოვანი",
          Complete: "შესრულება",
          Edit: "ჩასწორება",
          Delete: "წაშლა",
          Completed: "შესრულებული",
        },
      },
    },
  });

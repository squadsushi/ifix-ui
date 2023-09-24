import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "t-AboutUs": "About us",
          "t-Services": "Services",
          "t-Contact": "Contact",
          "t-Products": "Telecommunications devices",
          "t-LearnMore": "Learn more",
          "t-WelcomeMsg": "Welcome to iFix. We are a leading provider of telecommunications device repair, maintenance, and software development services.",
          "t-TeleService": "Telecommunications device repair and maintenance service",
          "Header.title.paragraph": "Electronic devices maintainance services and software development",
          "Header.title.paragraph1": "Fast - Reliable - Responsible - Low cost",
        }
      },
      vi: {
        translation: {
          "t-AboutUs": "Về chúng tôi",
          "t-Services": "Các dịch vụ",
          "t-Contact": "Liên hệ",
          "t-Products": "Thiết bị đo lường",
          "t-LearnMore": "Tìm hiểu thêm",
          "t-TeleService": "Dịch vụ Bảo dưỡng và Sửa chữa Thiết bị Vô tuyến Điện tử",
          "t-WelcomeMsg": "Chào mừng bạn đến với iFix, chúng tôi là một công ty chuyên cung cấp các dịch vụ đa dạng trong lĩnh vực điện tử viễn thông và công nghệ thông tin.",
          "Header.title.paragraph": "Sửa chữa, bảo dưỡng các thiết bị vô tuyến điện tử chuyên nghiệp, xây dựng và phát triển phần mềm",
          "Header.title.paragraph1": "Nhanh chóng - Uy tín - Trách nhiệm - Chi phí thấp",
        }
      }
    },
    lng: "vi",
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false 
    }
  });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

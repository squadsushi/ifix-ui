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
          "t-VectorTransceivers": "Vector Transceivers",
          "t-SignalGenerators": "Signal Generators",
          "t-PowerSensors": "Power Sensors",
          "t-Oscilloscopes": "Oscilloscopes",
          "t-SpectrumAnalyzers": "Spectrum Analyzers",
          "t-NetworkAnalyzers": "Network Analyzers",
          "t-LCRMeters": "LCR Meters",
          "t-DCPowerSupplies": "DC Power Supplies",
          "t-AboutUs": "About us",
          "t-Services": "Services",
          "t-OurServices": "Our Services",
          "t-ContactWithUs": "Contact Us",
          "t-FillForm": "Fill the below form and get in touch!",
          "t-Contact": "Contact",
          "t-Products1": "Measurement Devices Repair & maintainance",
          "t-Products": "Repair & maintainance",
          "t-LearnMore": "Learn more",
          "t-WelcomeMsg": "Welcome to iFix. We are a leading provider of measurement devices and software development services.",
          "t-OurCoreValues": "Our Core Values",
          "t-SoftwareService": "Software Development Service",
          "t-SoftwareServiceIntro01": "At iFix, we understand that software is the heart of information technology systems. We specialize in developing a wide range of software applications, from mobile apps, firmwares, middlewares to complex enterprise software.",
          "t-SoftwareServiceIntro02": "Our software development team comprises engineers who have previously worked at leading technology companies in Vietnam. They bring together a blend of technological expertise and a deep understanding of customer needs to create customizable, efficient, and reliable software solutions.",
          "t-TeleServiceIntro01": "Our team of electronic engineers with many years of experience on reparing, maintaining various kinds of electronic devices, including those used in measurement, testing, industrial machinery, and telecommunications networks. We take pride in offering maintenance and repair services for electronic devices.",
          "t-TeleServiceIntro02": "Accompanying this is a warranty process that not only ensures your equipment operates smoothly and efficiently but also undergoes regular maintenance to reduce the risk of malfunction.",
          "t-TeleService": "Measurement Device Repair and Maintenance Service",
          "Header.title.paragraph": "Trading, Maintaining, Repairing Measurement Devices and Software Development",
          "Header.title.paragraph1": "Professional - Fast - Reliable - Legitimate - Low cost",
          "About.Why.01": "Professional",
          "About.Why.02": "Fast",
          "About.Why.03": "Reliable",
          "About.Why2.01": "Legitimate",
          "About.Why2.02": "Low cost",
          "t-RepairAndMaintainance": "Repair & Maintainance",
          "t-RepairAndMaintainanceDesc": "Our team of electronic engineers with many years of experience on reparing, maintaining various kinds of electronic devices, including those used in measurement, testing, industrial machinery, and telecommunications networks.",
          "t-TradingDevice": "Trading",
          "t-TradingDeviceDesc": "We provide various kinds of electronic devices, including those used in measurement, testing, industrial machinery, and telecommunications networks.",
          "t-Software": "Software",
          "t-SoftwareDevelopment": "Software Development",
          "t-SoftwareDevelopmentDesc": "Our software development team comprises engineers who have previously worked at leading technology companies in Vietnam. They bring together a blend of technological expertise and a deep understanding of customer needs to create customizable, efficient, and reliable software solutions.",
          "t-FullName": "Your full name",
          "t-Message": "Message",
          "t-Send": "Send",
          "t-ContactInfo": "Contact",
          "t-PhoneNumber": "Phone",
          "t-CopyRight": "2023 IFIX Technical Service and Trading Limited Company",
          "t-Address": "Address",
          "Contact.address": "Room 201, No. 25, Alley 120, Tran Duy Hung Street, Cau Giay District, Hanoi City",
        }
      },
      vi: {
        translation: {
          "t-VectorTransceivers": "Máy phát tín hiệu vector",
          "t-LCRMeters": "LCR - đồng hồ đo",
          "t-SignalGenerators": "Máy phát tín hiệu",
          "t-PowerSensors": "Power sensors",
          "t-NetworkAnalyzers": "Máy phân tích mạng",
          "t-SpectrumAnalyzers": "Máy phân tích phổ",
          "t-Oscilloscopes": "Oscilloscopes",
          "t-DCPowerSupplies": "Sửa chữa các bộ nguồn",
          "t-AboutUs": "Giới thiệu",
          "t-OurServices": "Các dịch vụ",
          "t-Services": "Dịch vụ",
          "t-Contact": "Liên hệ",
          "t-FillForm": "Hãy điền thông tin vào đơn sau và chúng tôi sẽ trả lời bạn sớm nhất có thể.",
          "t-ContactWithUs": "Liên hệ với chúng tôi",
          "t-Products": "Sửa chữa & bảo hành",
          "t-Products1": "Sửa chữa & bảo hành thiết bị",
          "t-LearnMore": "Tìm hiểu thêm",
          "t-OurCoreValues": "Các tiêu chí hàng đầu của iFix",
          "t-TeleService": "Dịch vụ Bảo dưỡng và Sửa chữa Thiết bị Vô tuyến Điện tử",
          "t-SoftwareService": "Dịch vụ Phát triển Phần mềm",
          "t-SoftwareServiceIntro01": "Ở iFix, chúng tôi hiểu rằng phần mềm là trái tim của hệ thống công nghệ thông tin. Chúng tôi chuyên phát triển các ứng dụng phần mềm đa dạng, từ ứng dụng di động, firmware, middleware đến các phần mềm doanh nghiệp phức tạp.",
          "t-SoftwareServiceIntro02": "Đội ngũ phát triển phần mềm của chúng tôi gồm các kỹ sư từng làm việc tại các kỳ lân công nghệ hàng đầu Việt Nam, có sự kết hợp giữa kiến thức về công nghệ và sự hiểu biết về nhu cầu của khách hàng, để tạo ra các giải pháp phần mềm tùy chỉnh, hiệu quả và đáng tin cậy.",
          "t-TeleServiceIntro01": "Với đội ngũ kỹ sư chuyên ngành điện tử có nhiều năm kinh nghiệm trong công tác bảo dưỡng và sửa chữa các thiết bị vô tuyến điện tử nói chung và các thiết bị trong lĩnh vực đo lường, thử nghiệm; các thiết bị công nghiệp; thiết bị mạng viễn thông nói riêng, chúng tôi tự hào cung cấp dịch vụ bảo dưỡng và sửa chữa thiết bị vô tuyến điện tử.",
          "t-TeleServiceIntro02": "Đi cùng với đó là quy trình bảo hành không những đảm bảo thiết bị của bạn luôn hoạt động ổn định và hiệu quả, khắc phục sự cố nhanh chóng mà còn được bảo dưỡng định kỳ để giảm nguy cơ hỏng hóc.",
          "t-WelcomeMsg": "Chào mừng bạn đến với iFix, chúng tôi là một công ty chuyên cung cấp các dịch vụ đa dạng trong lĩnh vực điện tử viễn thông và công nghệ thông tin.",
          "Header.title.paragraph": "Kinh doanh, sửa chữa, bảo dưỡng các thiết bị vô tuyến điện tử và phát triển phần mềm",
          "Header.title.paragraph1": "Chuyên nghiệp - Nhanh chóng - Uy tín - Trách nhiệm - Chi phí thấp",
          "About.Why.01": "Chuyên nghiệp",
          "About.Why.02": "Nhanh chóng",
          "About.Why.03": "Uy tín",
          "About.Why2.01": "Trách nhiệm",
          "About.Why2.02": "Chi phí thấp",
          "t-RepairAndMaintainance": "Sửa chữa & Bảo dưỡng thiết bị",
          "t-RepairAndMaintainanceDesc": "20 năm kinh nghiệm trong công tác sửa chữa các thiết bị vô tuyến điện tử nói chung và các thiết bị trong lĩnh vực đo lường, thử nghiệm; các thiết bị công nghiệp; thiết bị mạng viễn thông nói riêng cùng hệ thống các trang thiết bị, máy móc hiện đại có độ ổn định và tin cậy cao.",
          "t-TradingDevice": "Kinh doanh thiết bị",
          "t-TradingDeviceDesc": "Chúng tôi cung cấp các thiết bị vô tuyến điện tử nói chung và các thiết bị trong lĩnh vực đo lường, thử nghiệm; các thiết bị công nghiệp; thiết bị mạng viễn thông nói riêng cùng hệ thống các trang thiết bị, máy móc hiện đại có độ ổn định và tin cậy cao.",
          "t-SoftwareDevelopment": "Phát triển phần mềm",
          "t-Software": "Phần mềm",
          "t-SoftwareDevelopmentDesc": "Đội ngũ phát triển phần mềm của chúng tôi gồm các kỹ sư từng làm việc tại các kỳ lân công nghệ hàng đầu Việt Nam, có sự kết hợp giữa kiến thức về công nghệ và sự hiểu biết về nhu cầu của khách hàng, để tạo ra các giải pháp phần mềm tùy chỉnh, hiệu quả và đáng tin cậy.",
          "t-FullName": "Họ và tên",
          "t-Message": "Lời nhắn",
          "t-Send": "Gửi",
          "t-ContactInfo": "Thông tin liên hệ",
          "t-Address": "Đia chỉ",
          "t-PhoneNumber": "Số điện thoại",
          "t-CopyRight": "2023 Công ty TNHH Thương mại và dịch vụ kỹ thuật IFIX",
          "Contact.address": "Phòng 201, số nhà 25, ngõ 120, đường Trần Duy Hưng, quận Cầu giấy, thành phố Hà Nội",
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

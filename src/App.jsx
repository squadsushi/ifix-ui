import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/*<Features data={landingPageData.Features} />*/}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} name="Các chủng loại thiết bị đo lường" />
      <Gallery data={landingPageData.PowerBank} name="Sửa chữa các bộ nguồn" />
      <Gallery data={landingPageData.LCR} name="Sửa chữa LCR - đồng hồ đo" />
      <Gallery data={landingPageData.NetworkAnalysis} name="Máy phân tích mạng" />
      <Gallery data={landingPageData.SpectralAnalysis} name="Máy phân tích phổ" />
      <Gallery data={landingPageData.SignalGenerator} name="Máy phát tín hiệu" />
      <Gallery data={landingPageData.VectorSignalGenerator} name="Máy phát tín hiệu vector" />
      <Gallery data={landingPageData.PowerSensor} name="Power sensor" />
      {/*<Testimonials data={landingPageData.Testimonials} />*/}
      {/*<Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

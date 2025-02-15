import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { SoftwareDevelopmentAbout } from "./components/softwareDevelopmentAbout";
import { TradingAbout } from "./components/tradingAbout";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useTranslation } from "react-i18next";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { t } = useTranslation();
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
      <Gallery data={landingPageData.Gallery} name={t("t-Products1")} />
      <Gallery data={landingPageData.PowerBank} name={t("t-DCPowerSupplies")} />
      <Gallery data={landingPageData.LCR} name={t("t-LCRMeters")} />
      <Gallery data={landingPageData.NetworkAnalysis} name={t("t-NetworkAnalyzers")} />
      <Gallery data={landingPageData.SignalGenerator} name={t("t-SignalGenerators")} />
      <Gallery data={landingPageData.VectorSignalGenerator} name={t("t-VectorTransceivers")} />
      <SoftwareDevelopmentAbout />
      <TradingAbout />
      {/*<Testimonials data={landingPageData.Testimonials} />*/}
      {/*<Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

import React from "react";
import { useTranslation } from "react-i18next";

export const Services = (props) => {
  const { t } = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("t-OurServices")}</h2>
          <p>{t("Header.title.paragraph")}</p>
          <br/>
          <p>{t("Header.title.paragraph1")}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{t(d.name)}</h3>
                    <p>{t(d.text)}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

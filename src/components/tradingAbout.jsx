import React from "react";
import { useTranslation } from "react-i18next";

export const TradingAbout = () => {
  const { t } = useTranslation();

  return (
    <div id="trading-about">
      <div  className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/trading.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("t-TradingDevice")}</h2>
              <p style={{marginTop: '0px'}}>
                {t("t-TradingDeviceDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

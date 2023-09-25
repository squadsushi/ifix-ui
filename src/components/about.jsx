import React from "react";
import { useTranslation } from "react-i18next";

export const About = (props) => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img style={{marginTop: '20px'}} src="img/lobby.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("t-AboutUs")}</h2>
              {/*<p>{props.data ? props.data.paragraph : "loading..."}</p>*/}
              <p>{t("t-WelcomeMsg")}</p>
              <h4>
                {t("t-TeleService")}:
              </h4>
              <p style={{marginTop: '0px'}}>
                {t("t-TeleServiceIntro01")}
                <br/>
                {t("t-TeleServiceIntro02")}
              </p>
              <h4>
                {t("t-SoftwareService")}:
              </h4>
              <p style={{marginTop: '0px'}}>
                {t("t-SoftwareServiceIntro01")}
                <br/>
                {t("t-SoftwareServiceIntro02")}
              </p>
              <h3>{t("t-OurCoreValues")}:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{t(d)}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {t(d)}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

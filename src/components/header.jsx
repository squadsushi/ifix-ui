import React from "react";
import { useTranslation } from "react-i18next";

export const Header = (props) => {
  const { t } = useTranslation();
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img style={{width: "350px"}} src="img/logo_with_slogan_white.png" />
                {/*<h1>*/}
                {/*  {props.data ? props.data.title : "Loading"}*/}
                {/*  <span></span>*/}
                {/*</h1>*/}
                <p style={{
                  color: '#5ca9fb',
                  // color: 'black',
                  marginTop: '50px',
                  marginBottom: '10px'
                }}>{props.data ? t(props.data.paragraph) : "Loading"}</p>
                <p style={{
                  color: '#5ca9fb',
                  // color: 'black',
                  // marginTop: '50px',
                  marginBottom: '60px'
                }}>{props.data ? t(props.data.paragraph1) : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t("t-LearnMore")}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

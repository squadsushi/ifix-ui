import React, {useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";

export const Navigation = (props) => {
  const vnRef = useRef(null);
  const ukRef = useRef(null);
  const { t, i18n } = useTranslation();

  let lg = localStorage.getItem('lang');
  if (lg===''||lg===null) {
    lg = 'vi';
  }

  const [lang, setLang] = useState(lg);
  useEffect(() => {
    if (vnRef !== null && vnRef !== undefined && ukRef !== null && ukRef !== undefined) {
      if (lang === 'vi') {
        vnRef.current.focus();
        ukRef.current.blur();
        localStorage.setItem('lang', 'vi');
        i18n.changeLanguage('vi');
      } else {
        ukRef.current.focus();
        vnRef.current.blur();
        localStorage.setItem('lang', 'en');
        i18n.changeLanguage('en');
      }
    }
  }, [lang])
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img style={{height: 50}} src="img/logo_ifix.png" className="img-responsive" alt="" />{" "}

          {/*<a className="navbar-brand page-scroll" href="#page-top">*/}
          {/*  React Landing Page*/}
          {/*</a>{" "}*/}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/*<li>*/}
            {/*  <a href="#features" className="page-scroll">*/}
            {/*    Sửa chữa thiết bị*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href="#about" className="page-scroll">
                {t('t-AboutUs')}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {t('t-Services')}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {t('t-Products')}
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="#testimonials" className="page-scroll">*/}
            {/*    Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#team" className="page-scroll">*/}
            {/*    Team*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href="#contact" className="page-scroll">
                {t('t-Contact')}
              </a>
            </li>
            <li>
              <a ref={vnRef} className="page-scroll" onClick={()=>setLang('vi')}>
                <img src={'img/vietnam.png'} style={{
                  height: '20px',
                  verticalAlign: 'top',
                  marginRight: '7px',
                  display: 'inline'}}/>
                VI
                {lang === 'vi' && <div style={{
                  display: 'block',
                  position: 'absolute',
                  left: '0',
                  bottom: '-1px',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                  content: "",
                  transition: 'width 0.2s',
                }}/>}
              </a>
            </li>
            <li>
              <a ref={ukRef} className="page-scroll" style={{marginLeft: '-15px'}} onClick={()=>setLang('en')}>
                <img src={'img/uk.png'} style={{
                  marginRight: '7px',
                  height: '20px',
                  verticalAlign: 'top',
                  display: 'inline'}}/>{" "}
                EN
                {lang === 'en' && <div style={{
                  display: 'block',
                  position: 'absolute',
                  left: '0',
                  bottom: '-1px',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                  content: "",
                  transition: 'width 0.2s',
                }}/>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

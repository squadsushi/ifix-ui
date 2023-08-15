import React from "react";

export const Navigation = (props) => {
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
                Về Chúng tôi
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Các dịch vụ
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Thiết bị đo lường
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
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

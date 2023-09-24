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
                Với đội ngũ kỹ sư chuyên ngành điện tử có nhiều năm kinh nghiệm trong công tác bảo dưỡng và sửa chữa
                các thiết bị vô tuyến điện tử nói chung và các thiết bị trong lĩnh vực đo lường, thử nghiệm; các thiết
                bị công nghiệp; thiết bị mạng viễn thông nói riêng, chúng tôi tự hào cung cấp dịch vụ bảo dưỡng và sửa
                chữa thiết bị vô tuyến điện tử.
                <br/>
                Đi cùng với đó là quy trình bảo hành không những đảm bảo thiết bị của
                bạn luôn hoạt động ổn định và hiệu quả, khắc phục sự cố nhanh chóng mà còn được bảo dưỡng định kỳ để
                giảm nguy cơ hỏng hóc.
              </p>
              <h4>
                Dịch vụ Phát triển Phần mềm:
              </h4>
              <p style={{marginTop: '0px'}}>
                Ở iFix, chúng tôi hiểu rằng phần mềm là trái tim của hệ thống công nghệ thông tin. Chúng tôi chuyên
                phát triển các ứng dụng phần mềm đa dạng, từ ứng dụng di động đến phần mềm doanh nghiệp phức tạp.
                <br/>
                Đội ngũ phát triển phần mềm của chúng tôi gồm các kỹ sư từng làm việc tại các kỳ lân công nghệ hàng đầu
                Việt Nam, có sự kết hợp giữa kiến thức về công nghệ và sự hiểu biết về nhu cầu của khách hàng, để tạo
                ra các giải pháp phần mềm tùy chỉnh, hiệu quả và đáng tin cậy.
              </p>
              <h3>Các tiêu chí hàng đầu của iFix</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
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

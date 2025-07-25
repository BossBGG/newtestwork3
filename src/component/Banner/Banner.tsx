// src/component/Banner/Banner.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../../i18n/config";
import LineButton from "../Buttons/LineButton";
import AppointmentButton from "../Buttons/AppointmentButton";
import "./banner.css";

const Banner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="banner-section">
      {/* Desktop Banner */}
      <div className="banner-desktop d-none d-md-block">
        <Container fluid className="banner-container">
          <Row className="h-100">
            <Col md={6} className="banner-content">
              <div className="banner-text">
                <h2 className="banner-title">{t("banner.title")}</h2>
                <h1 className="banner-subtitle">
                  {t("banner.subtitle")
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          t("banner.subtitle").split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                </h1>
                <h3 className="banner-doctor">{t("banner.doctor_name")}</h3>
                <div className="banner-divider"></div>

                <p className="banner-description">{t("banner.description")}</p>
                
                {/* Desktop Buttons */}
                <div className="banner-buttons">
                  <LineButton
                    text={t("banner.consultation_button")}
                    href="https://lin.ee/EgSMgUU9"
                    size="large"
                  />
                  <AppointmentButton
                    text={t("banner.appointment_button")}
                    href="https://lin.ee/EgSMgUU9"
                    size="large"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="banner-image">
              {/* Image section - will be handled by CSS background */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mobile Banner */}
      <div className="banner-mobile d-md-none">
        <Container fluid className="banner-container-mobile">
          <Row>
            <Col xs={12} className="banner-content-mobile">
              <div className="banner-text-mobile">
                <h1 className="banner-title-mobile">{t("banner.title")}</h1>
                <h2 className="banner-subtitle-mobile">
                  {t("banner.subtitle_mobile")
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          t("banner.subtitle_mobile").split("\n\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                </h2>
                <h3 className="banner-doctor-mobile">
                  {t("banner.doctor_name")}
                </h3>
                <p className="banner-description-mobile">
                  {t("banner.description")}
                </p>
                
                {/* Mobile Buttons */}
                <div className="banner-buttons-mobile">
                  <LineButton
                    text={t("banner.consultation_button")}
                    href="https://lin.ee/EgSMgUU9"
                    size="medium"
                  />
                  <AppointmentButton
                    text={t("banner.appointment_button")}
                    href="https://lin.ee/EgSMgUU9"
                    size="medium"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
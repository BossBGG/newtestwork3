// src/component/About/About.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLanguage } from "../../i18n/config";
import "./about.css";
import DoctorIcon from '../../assets/images/user-doctor.png'
import Hospital from '../../assets/images/hospital-user.png'

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="about-section" id="about-us">
      {/* Desktop View */}
      <div className="about-desktop d-none d-md-block">
        <Container fluid className="about-container">
          <Row className="h-100">
            <div className="about-content">
              <div className="about-text">
                <h2 className="about-title">{t("about.title")}</h2>
                <h1 className="about-doctor-name">{t("about.doctor_name")}</h1>
                <h3 className="about-specialty">{t("about.specialty")}</h3>

                <div className="about-des">
                  <p className="about-description">{t("about.description")}</p>

                  <div className="about-read-more">
                    <button className="about-read-more-btn d-flex align-items-center">
                      <span>{t("about.read_more")}</span>
                    </button>
                  </div>
                </div>

                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-icon experience-icon">
                      <img src={DoctorIcon} alt="" width="32" height="32" />
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">
                        {t("about.experience_label")}
                      </div>
                      <div className="stat-value">
                        {t("about.experience_value")}
                      </div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon patients-icon">
                     <img src={Hospital} alt="" width="36" height="36"/>
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">
                        {t("about.patients_label")}
                      </div>
                      <div className="stat-value">
                        {t("about.patients_value")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Col md={5} className="about-image">
              {/* Doctor image handled by CSS background */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mobile View */}
      <div className="about-mobile d-md-none">
        <Container fluid className="about-container-mobile">
          <Row>
            <Col xs={12} className="about-content-mobile">
              <div className="about-text-mobile">
                <h2 className="about-title-mobile">{t("about.title")}</h2>
                <h1 className="about-doctor-name-mobile">
                  {t("about.doctor_name")}
                </h1>
                <h3 className="about-specialty-mobile">
                  {t("about.specialty")}
                </h3>

                <p className="about-description-mobile">
                  {t("about.description")}
                </p>

                <Button className="about-read-more-btn-mobile d-flex align-items-center justify-content-center">
                  <span>{t("about.read_more")}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ms-2"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </Button>

                <div className="about-stats-mobile">
                  <div className="stat-item-mobile">
                    <div className="stat-icon-mobile experience-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V4C15 1.8 13.2 0 11 0S7 1.8 7 4V5.5L1 7V9L7 7.5V12H5C3.9 12 3 12.9 3 14V16C3 17.1 3.9 18 5 18H7V22H17V18H19C20.1 18 21 17.1 21 16V14C21 12.9 20.1 12 19 12H17V7.5L21 9Z" />
                      </svg>
                    </div>
                    <div className="stat-content-mobile">
                      <div className="stat-label-mobile">
                        {t("about.experience_label")}
                      </div>
                      <div className="stat-value-mobile">
                        {t("about.experience_value")}
                      </div>
                    </div>
                  </div>

                  <div className="stat-item-mobile">
                    <div className="stat-icon-mobile patients-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 4C16.55 4 17 4.45 17 5S16.55 6 16 6H15V7C15 7.55 14.55 8 14 8S13 7.55 13 7V6H12C11.45 6 11 5.55 11 5S11.45 4 12 4H13V3C13 2.45 13.45 2 14 2S15 2.45 15 3V4H16ZM13 9H15C16.1 9 17 9.9 17 11V19C17 20.1 16.1 21 15 21H9C7.9 21 7 20.1 7 19V11C7 9.9 7.9 9 9 9H11V11H13V9ZM12 14C11.45 14 11 14.45 11 15S11.45 16 12 16S13 15.55 13 15S12.55 14 12 14Z" />
                      </svg>
                    </div>
                    <div className="stat-content-mobile">
                      <div className="stat-label-mobile">
                        {t("about.patients_label")}
                      </div>
                      <div className="stat-value-mobile">
                        {t("about.patients_value")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

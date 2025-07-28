// src/component/About/About.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLanguage } from "../../i18n/config";
import "./about.css";
import DoctorIcon from "../../assets/images/user-doctor.png";
import Hospital from "../../assets/images/hospital-user.png";

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
                      <img src={Hospital} alt="" width="36" height="36" />
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

      {/* Mobile View - แก้ไขให้ตรงตาม design */}
      <div className=" d-md-none">
        <div className="about-mobile">
          <div className="about-header-mobile">
            <h2 className="about-title-mobile">{t("about.title")}</h2>
            <h1 className="about-doctor-name-mobile">
              {t("about.doctor_name")}
            </h1>
            <h3 className="about-specialty-mobile">{t("about.specialty")}</h3>
          </div>
        </div>
        <Container fluid className="about-container-mobile">
          <Row>
            <Col xs={12} className="about-content-mobile">
              <div className="about-text-mobile">
                <p className="about-description-mobile">
                  {t("about.description")}
                </p>

                <div className="about-read-more-btn-mobile d-flex align-items-center justify-content-center">
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
                </div>

                <div className="about-stats-mobile">
                  <div className="stat-item-mobile">
                    <div className="stat-icon-mobile experience-icon">
                      <img src={DoctorIcon} alt="" width="32" height="32" />
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
                      <img src={Hospital} alt="" width="32" height="32" />
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

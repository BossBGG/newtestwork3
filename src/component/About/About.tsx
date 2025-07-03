import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import DrImage from '../../assets/images/dr-keng.svg';
import AboutMobile from '../../assets/images/aboutmobile.png';
import './about.css';


const About: React.FC = () => {
  return (
    <div className="about-section" id="about-us">
      {/* Desktop View */}
      <Row className="d-none d-md-flex">
        <Image className="about-desktop-image p-0" src={DrImage} fluid />
      </Row>

      {/* Mobile View */}
      <div className="about-mobile d-md-none">
        <div className="about-mobile-background">
          <Image src={AboutMobile} fluid className="about-mobile-bg-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
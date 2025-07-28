import React from 'react';
import { Col, Row } from "react-bootstrap";
import { useLanguage } from '../../i18n/config';
import './from-customer.css';
import Slider from "react-slick";
import Social from "../Social/Social.tsx";
import FromCustomerCard from './FromCustomerCard.tsx';

const FromCustomer = () => {
  const { t } = useLanguage();
  
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    speed: 300,
  };

  // ข้อมูลลูกค้า - เก็บเฉพาะ key และประเภทรูป
  const customerData = [
    { customerKey: 'customer1', profileType: 'woman' as const },
    { customerKey: 'customer2', profileType: 'man' as const },
    { customerKey: 'customer3', profileType: 'woman' as const }
  ];

  return (
    <Row className={'content'}>
      <Col md={1} />
      <Col md={10}>
        <Row>
          <h2>{t('fromcustomer.title')}</h2>
        </Row>
        <Row>
          <h1>{t('fromcustomer.subtitle')}</h1>
        </Row>
        <Row>
          <p className={'mb-4 content-text'}>
            {t('fromcustomer.description')}
          </p>
        </Row>
        <Row className={'row-gap-3'}>
          <Col md={6} onClick={() => {
            console.log('click iframe')
          }}>
            <iframe 
              className={'video-player rounded-4'}
              src="https://www.youtube.com/embed/TziuZyASUys?si=Tm97j2n7U-R7yhKY&amp;controls=0"
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer;encrypted-media; gyroscope; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Col>
          <Col md={6}>
            <div className={'slider-container'}>
              <Slider {...settings}>
                {customerData.map((customer, index) => (
                  <div key={index}>
                    <FromCustomerCard 
                      customerKey={customer.customerKey}
                      profileType={customer.profileType}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Social />
      </Col>
    </Row>
  );
};

export default FromCustomer;
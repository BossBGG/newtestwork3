import React from 'react';
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router";
import { useLanguage } from '../../i18n/config';
import fbLogo from "../../assets/images/fb.svg";
import ytLogo from "../../assets/images/yt.svg";
import ttLogo from "../../assets/images/tt.svg";
import lineLogo from "../../assets/images/line.svg";
import './social.css';

const Social = () => {
  const { t } = useLanguage();
  
  return (
    <Row className={'social-content'}>
      <Col md={6}>
        <h5>{t('social.doctor_name')}</h5>
        <h3>{t('social.all_channels')}</h3>
      </Col>
      <Col md={6}>
        <div className={'d-flex flex-row justify-content-center column-gap-3'}>
          <div className={'social-icon'}>
            <Link to={'https://www.youtube.com/@taninniitleerapun'} target={'_blank'}>
              <Image 
                src={ytLogo}
                width={80}
                height={80}
                fluid={true}
              />
            </Link>
          </div>
          <div className={'social-icon'}>
            <Link to={'https://www.tiktok.com/@doctorkeng.chiangmai'} target={'_blank'}>
              <Image 
                src={ttLogo}
                width={80}
                height={80}
                fluid={true}
              />
            </Link>
          </div>
          <div className={'social-icon'}>
            <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'}>
              <Image
                src={lineLogo} 
                width={80} 
                height={80}
                fluid={true}
              />
            </Link>
          </div>
          <div className={'social-icon'}>
            <Link 
              className={'social-icon'}
              to={'https://www.facebook.com/backpainnonop'}
              target={'_blank'}
            >
              <Image 
                src={fbLogo}
                width={80} 
                height={80}
                fluid={true}
              />
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Social;
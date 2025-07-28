import React from 'react';
import { Col, Image, Row } from "react-bootstrap";
import { useLanguage } from '../../i18n/config';
import DrImg from '../../assets/images/doctor.svg'
import ClinicImg from '../../assets/images/clinic.svg'
import TelImg from '../../assets/images/tel.svg'
import ContactButton from '../Buttons/ContactButton';
import './contact.css'

const ContactUs = () => {
    const { t } = useLanguage();
    
    return (
        <Row id={'contact-us'}>
            <Col md={12}>
                <Row>
                    <h2 className={'title mt-2'}>{t('contact.title')}</h2>
                </Row>
                <Row>
                    <Col md={6}>
                        {/* Doctor Info Section */}
                        <Row>
                            <Col xs={2} className={'pe-0'}>
                                <div className={'contact-img pe-0 me-0 text-end justify-content-start float-end'}>
                                    <Image src={DrImg} fluid={true}/>
                                </div>
                            </Col>
                            <Col xs={10} className={'contact-text'}>
                                <Row>
                                    <span className={'head-text'}>{t('contact.doctor_title')}</span>
                                </Row>
                                <Row className={'body-text2'}>
                                    <span className={'detail-text'}>
                                        {t('contact.clinic_name')}
                                        <br />
                                        {t('contact.address')}
                                    </span>
                                </Row>
                            </Col>
                        </Row>

                        {/* Operating Hours Section */}
                        <Row className={'mt-2 contact-text'}>
                            <Col xs={2} className={'pe-0'}>
                                <div className={'contact-img pe-0 me-0 text-end justify-content-start float-end'}>
                                    <Image src={ClinicImg} fluid={true}/>
                                </div>
                            </Col>
                            <Col xs={10} className={'contact-text'}>
                                <Row>
                                    <span className={'head-text'}>{t('contact.open_daily')}</span>
                                </Row>
                                <Row className={'body-text2'}>
                                    <span className={'detail-text'}>{t('contact.monday_friday')}</span>
                                    <span className={'detail-text'}>{t('contact.saturday')}</span>
                                    <span className={'detail-text'}>{t('contact.sunday')}</span>
                                </Row>
                            </Col>
                        </Row>

                        {/* Phone Section */}
                        <Row className={'mt-2 contact-text'}>
                            <Col xs={2} className={'pe-1'}>
                                <div className={'contact-img-tel me-0 text-end justify-content-start float-end'}>
                                    <Image src={TelImg} fluid={true}/>
                                </div>
                            </Col>
                            <Col xs={10} className={'contact-text'}>
                                <Row>
                                    <span className={'head-text'}>{t('contact.phone')}</span>
                                </Row>
                            </Col>
                        </Row>

                        {/* Contact Button Section */}
                        <Row className={'justify-content-start ps-3'}>
                            <div className={'w-auto p-0 m-4'}>
                                <ContactButton
                                    text={t('contact.contact_button')}
                                    href="https://lin.ee/EgSMgUU9"
                                    size="medium"
                                />
                            </div>
                        </Row>
                    </Col>

                    {/* Map Section */}
                    <Col md={6}>
                        <iframe
                            className={'map-iframe'}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.024564821097!2d99.010743!3d18.786735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da255350938265%3A0x88f5a72bc204b1a7!2z4LiE4Lil4Li04LiZ4Li04LiB4LiB4Lij4Liw4LiU4Li54LiB4LmB4Lil4Liw4LiC4LmJ4LitIOC4q-C4oeC4reC5gOC4geC5iOC4hyDguKrguLHguJnguJvguYjguLLguILguYjguK3guKJguITguKXguLTguJnguLTguIE!5e0!3m2!1sen!2sus!4v1734426114913!5m2!1sen!2sus"
                            width="100%" 
                            height="400px"   
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ContactUs;
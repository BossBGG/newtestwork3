import { Col, Image, Row} from "react-bootstrap";
import DrImg from '../../assets/images/doctor.svg'
import ClinicImg from '../../assets/images/clinic.svg'
import TelImg from '../../assets/images/tel.svg'
import ContactBBtn from '../../assets/images/contact-blue-btn.svg'
import './contact.css'
import {Link} from "react-router";

const ContactUs = () =>{
    return <Row id={'contact-us'}>
        <Col md={12}>
            <Row><h2 className={'title mt-2 '}>ติดต่อเรา</h2></Row>
            <Row>
                <Col md={6} >
                    <Row>
                        <Col xs={2} className={'pe-0'}>
                            <div className={'contact-img pe-0 me-0 text-end justify-content-start float-end'}>
                                <Image  src={DrImg} fluid={true}/>
                            </div>
                        </Col>
                        <Col xs={10} className={'contact-text'}>
                            <Row>
                                <text className={'head-text'}>หมอเก่งกระดูกและข้อ</text>
                            </Row>
                            <Row className={'body-text2'}>
                                <text className={'detail-text'}>สันป่าข่อยคลินิก Sanpakoi Clinic (Doctor Keng)
                                    271 ถ.เจริญเมือง ต.วัดเกต อ.เมือง จ.เชียงใหม่ 50000
                                </text>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={'mt-2 contact-text'}>
                        <Col xs={2} className={'pe-0'}>
                            <div className={'contact-img pe-0 me-0 text-end justify-content-start float-end'}>
                                <Image src={ClinicImg} fluid={true}/>
                            </div>
                        </Col>
                        <Col xs={10} className={'contact-text'}>
                            <Row>
                                <text className={'head-text'}>เปิดบริการทุกวัน</text>
                            </Row>
                            <Row className={'body-text2'}>
                                <text className={'detail-text'}>จันทร์-ศุกร์ เวลา 16.30 น. – 18.30 น.</text>
                                <text className={'detail-text'}>เสาร์ เวลา 13.00 น. – 16.00 น.</text>
                                <text className={'detail-text'}>อาทิตย์ เวลา 09.00 น. – 12.00 น.</text>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={'mt-2 contact-text'}>
                        <Col xs={2} className={'pe-1'}>
                            <div className={'contact-img-tel me-0 text-end justify-content-start float-end'}>
                                <Image src={TelImg} fluid={true}/>
                            </div>
                        </Col>
                        <Col xs={10} className={'contact-text'}>
                            <Row>
                                <text className={'head-text'}>081-5303666</text>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={'justify-content-start ps-3'}>
                        <Link className={'contact-btn w-auto p-0 m-4'} to={'https://lin.ee/EgSMgUU9'} target={'_blank'}>
                            <button className={'contact-btn'}><Image height={50} src={ContactBBtn} fluid={true}/>
                            </button>
                        </Link>
                    </Row>
                </Col>
                <Col md={6}>
                    <iframe
                        className={'map-iframe'}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.024564821097!2d99.010743!3d18.786735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da255350938265%3A0x88f5a72bc204b1a7!2z4LiE4Lil4Li04LiZ4Li04LiB4LiB4Lij4Liw4LiU4Li54LiB4LmB4Lil4Liw4LiC4LmJ4LitIOC4q-C4oeC4reC5gOC4geC5iOC4hyDguKrguLHguJnguJvguYjguLLguILguYjguK3guKLguITguKXguLTguJnguLTguIE!5e0!3m2!1sen!2sus!4v1734426114913!5m2!1sen!2sus"
                        width="100%" height="400px"   loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Col>
    </Row>
}
export default ContactUs
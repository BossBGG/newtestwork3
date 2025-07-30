import { Col, Image, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/images/logo-banner.png"; // เปลี่ยนเป็น logo-banner.png
import fbLogo from "../../assets/images/fb.svg";
import ytLogo from "../../assets/images/yt.svg";
import lineLogo from "../../assets/images/line.svg";
import ttLogo from "../../assets/images/tt.svg";
import { Link } from "react-router";
import { useLanguage } from '../../i18n/config';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div>
      <Row className={"footer p-5"}>
        {/* Logo และคำอธิบาย */}
        <Col xs={12} md={5} className={"footer-left-section"}>
          <Row className="justify-content-center justify-content-md-start">
            <div className="footer-brand-container">
              <Image className={"footer-logo"} src={logo} fluid={true} />
              <h3 className="footer-brand-text">{t('footer.logo_text')}</h3>
            </div>
          </Row>
          <Row className={"mt-3 mb-3"}>
            <text className={"footer-text"}>
              {t('footer.description').split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < t('footer.description').split('\n').length - 1 && <br />}
                </span>
              ))}
            </text>
          </Row>
        </Col>

        {/* เมนูความรู้กระดูกและข้อ - Desktop */}
        <Col xs={12} lg={3} className="footer-menu-section d-none d-lg-block">
          <div className="menu-group">
            <h4 className="menu-title">{t('footer.bone_joint_knowledge')}</h4>
            <div className="menu-row">
              <div className="menu-column">
                <ul>
                  <li><a href={'/content/ปวดหลัง'}>{t('footer.menu.back_pain')}</a></li>
                  <li><a href={'/content/ปวดเข่า'}>{t('footer.menu.knee_pain')}</a></li>
                  <li><a href={'/content/ปวดไหล่'}>{t('footer.menu.shoulder_pain')}</a></li>
                  <li><a href={'/content/ปวดคอ'}>{t('footer.menu.neck_pain')}</a></li>
                  <li><a href={'/content/ปวดข้อมือ'}>{t('footer.menu.wrist_pain')}</a></li>
                  <li><a href={'/content/กระดูกพรุน'}>{t('footer.menu.osteoporosis')}</a></li>
                </ul>
              </div>
              <div className="menu-column">
                <ul>
                  <li><a href={'/content/ปวดข้อศอก'}>{t('footer.menu.elbow_pain')}</a></li>
                  <li><a href={'/content/ปวดสะโพก'}>{t('footer.menu.hip_pain')}</a></li>
                  <li><a href={'/content/เกาต์'}>{t('footer.menu.gout')}</a></li>
                  <li><a href={'/content/โรคมือชา'}>{t('footer.menu.hand_numbness')}</a></li>
                  <li><a href={'/content/ข้อเข่าเทียม'}>{t('footer.menu.artificial_knee')}</a></li>
                  <li><a href={'/content/กายภาพบำบัด'}>{t('footer.menu.physical_therapy')}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Col>

        {/* เมนูความรู้สุขภาพ - Desktop Only */}
        <Col xs={12} lg={3} className="footer-menu-section d-none d-lg-block">
          <div className="menu-group">
            <h4 className="menu-title">{t('footer.health_knowledge')}</h4>
            <div className="menu-single-column">
              <ul>
                <li><a href={'/article/สำหรับนักศึกษาแพทย์'}>{t('footer.menu.for_medical_students')}</a></li>
                <li><a href={'/article/อัลตร้าซาวด์'}>{t('footer.menu.ultrasound')}</a></li>
                <li><a href={'/article/MRI'}>{t('footer.menu.mri')}</a></li>
                <li><a href={'/article/ความรู้ทั่วไป'}>{t('footer.menu.general_knowledge')}</a></li>
                <li><a href={'/article/Video'}>{t('footer.menu.video')}</a></li>
                <li><a href={'/article/Infographic'}>{t('footer.menu.infographic')}</a></li>
                <li><a href={'/article/E-book'}>{t('footer.menu.ebook')}</a></li>
              </ul>
            </div>
          </div>
        </Col>

        {/* เมนูความรู้กระดูกและข้อ - Mobile Only */}
        <Col xs={12} className="footer-menu-mobile d-lg-none">
          <div className="menu-group-mobile">
            <h4 className="menu-title-mobile">{t('footer.bone_joint_knowledge')}</h4>
            <div className="menu-mobile-container">
              <div className="menu-mobile-column">
                <ul>
                  <li><a href={'/content/ปวดหลัง'}>{t('footer.menu.back_pain')}</a></li>
                  <li><a href={'/content/ปวดเข่า'}>{t('footer.menu.knee_pain')}</a></li>
                  <li><a href={'/content/ปวดไหล่'}>{t('footer.menu.shoulder_pain')}</a></li>
                  <li><a href={'/content/ปวดคอ'}>{t('footer.menu.neck_pain')}</a></li>
                  <li><a href={'/content/ปวดข้อมือ'}>{t('footer.menu.wrist_pain')}</a></li>
                  <li><a href={'/content/กระดูกพรุน'}>{t('footer.menu.osteoporosis')}</a></li>
                </ul>
              </div>
              <div className="menu-mobile-column">
                <ul>
                  <li><a href={'/content/ปวดข้อศอก'}>{t('footer.menu.elbow_pain')}</a></li>
                  <li><a href={'/content/ปวดสะโพก'}>{t('footer.menu.hip_pain')}</a></li>
                  <li><a href={'/content/เกาต์'}>{t('footer.menu.gout')}</a></li>
                  <li><a href={'/content/โรคมือชา'}>{t('footer.menu.hand_numbness')}</a></li>
                  <li><a href={'/content/ข้อเข่าเทียม'}>{t('footer.menu.artificial_knee')}</a></li>
                  <li><a href={'/content/กายภาพบำบัด'}>{t('footer.menu.physical_therapy')}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Col>

        {/* Social Media Icons - Desktop */}
        <Col xs={12} lg={1} className={'footer-social-section d-none d-lg-block'}>
          <div className={'social-icons-container'}>
            <Link to={'https://www.facebook.com/backpainnonop'} target={'_blank'} className="social-link">
              <Image src={fbLogo} width={40} height={40} fluid={true} />
            </Link>
            <Link to={'https://www.youtube.com/@taninniitleerapun'} target={'_blank'} className="social-link">
              <Image src={ytLogo} width={40} height={40} fluid={true} />
            </Link>
            <Link to={'https://www.tiktok.com/@doctorkeng.chiangmai'} target={'_blank'} className="social-link">
              <Image src={ttLogo} width={40} height={40} fluid={true} />
            </Link>
            <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'} className="social-link">
              <Image src={lineLogo} width={40} height={40} fluid={true} />
            </Link>
          </div>
        </Col>

        {/* Social Media Icons - Mobile */}
        <Col xs={12} className="footer-social-mobile d-lg-none">
          <div className="social-icons-mobile">
            <Link to={'https://www.facebook.com/backpainnonop'} target={'_blank'} className="social-link-mobile">
              <Image src={fbLogo} width={50} height={50} fluid={true} />
            </Link>
            <Link to={'https://www.youtube.com/@taninniitleerapun'} target={'_blank'} className="social-link-mobile">
              <Image src={ytLogo} width={50} height={50} fluid={true} />
            </Link>
            <Link to={'https://www.tiktok.com/@doctorkeng.chiangmai'} target={'_blank'} className="social-link-mobile">
              <Image src={ttLogo} width={50} height={50} fluid={true} />
            </Link>
            <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'} className="social-link-mobile">
              <Image src={lineLogo} width={50} height={50} fluid={true} />
            </Link>
          </div>
        </Col>
      </Row>

      <Row className={"footer-copy-right pt-3 pb-2 ps-5"}>
        <h5>{t('footer.copyright')}</h5>
      </Row>
    </div>
  );
};

export default Footer;
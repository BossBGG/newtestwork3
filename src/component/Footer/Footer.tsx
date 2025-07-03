import { Col, Image, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/images/footer-logo.svg";
import fbLogo from "../../assets/images/fb.svg";
import ytLogo from "../../assets/images/yt.svg";
import lineLogo from "../../assets/images/line.svg";
import ttLogo from "../../assets/images/tt.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <Row className={"footer p-5"}>
        {/* Logo และคำอธิบาย */}
        <Col xs={12} md={5} className={"footer-left-section"}>
          <Row className="justify-content-center justify-content-md-start">
            <Image className={"footer-logo"} src={logo} fluid={true} />
          </Row>
          <Row className={"mt-3 mb-3"}>
            <text className={"footer-text"}>
              แพทย์ผู้เชี่ยวชาญกระดูกและข้อ <br/> ปัจจุบันทำงานเป็นอาจารย์ประจำ<br/> 
              ภาควิชาออร์โธปิดิกส์ คณะแพทยศาสตร์<br/>  มหาวิทยาลัยเชียงใหม่
            </text>
          </Row>
        </Col>

        {/* เมนูความรู้กระดูกและข้อ - Desktop */}
        <Col xs={12} lg={3} className="footer-menu-section d-none d-lg-block">
          <div className="menu-group">
            <h4 className="menu-title">ความรู้กระดูกและข้อ</h4>
            <div className="menu-row">
              <div className="menu-column">
                <ul>
                  <li><a href={'/content/ปวดหลัง'}>ปวดหลัง</a></li>
                  <li><a href={'/content/ปวดเข่า'}>ปวดเข่า</a></li>
                  <li><a href={'/content/ปวดไหล่'}>ปวดไหล่</a></li>
                  <li><a href={'/content/ปวดคอ'}>ปวดคอ</a></li>
                  <li><a href={'/content/ปวดข้อมือ'}>ปวดข้อมือ</a></li>
                  <li><a href={'/content/กระดูกพรุน'}>กระดูกพรุน</a></li>
                </ul>
              </div>
              <div className="menu-column">
                <ul>
                  <li><a href={'/content/ปวดข้อศอก'}>ปวดข้อศอก</a></li>
                  <li><a href={'/content/ปวดสะโพก'}>ปวดสะโพก</a></li>
                  <li><a href={'/content/เกาต์'}>เกาต์</a></li>
                  <li><a href={'/content/โรคมือชา'}>โรคมือชา</a></li>
                  <li><a href={'/content/ข้อเข่าเทียม'}>ข้อเข่าเทียม</a></li>
                  <li><a href={'/content/กายภาพบำบัด'}>กายภาพบำบัด</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Col>

        {/* เมนูความรู้สุขภาพ - Desktop Only */}
        <Col xs={12} lg={3} className="footer-menu-section d-none d-lg-block">
          <div className="menu-group">
            <h4 className="menu-title">ความรู้สุขภาพ</h4>
            <div className="menu-single-column">
              <ul>
                <li><a href={'/article/สำหรับนักศึกษาแพทย์'}>สำหรับนักศึกษาแพทย์</a></li>
                <li><a href={'/article/อัลตร้าซาวด์'}>อัลตร้าซาวด์</a></li>
                <li><a href={'/article/MRI'}>MRI</a></li>
                <li><a href={'/article/ความรู้ทั่วไป'}>ความรู้ทั่วไป</a></li>
                <li><a href={'/article/Video'}>Video</a></li>
                <li><a href={'/article/Infographic'}>Infographic</a></li>
                <li><a href={'/article/E-book'}>E-Book</a></li>
              </ul>
            </div>
          </div>
        </Col>

        {/* เมนูความรู้กระดูกและข้อ - Mobile Only */}
        <Col xs={12} className="footer-menu-mobile d-lg-none">
          <div className="menu-group-mobile">
            <h4 className="menu-title-mobile">ความรู้กระดูกและข้อ</h4>
            <div className="menu-mobile-container">
              <div className="menu-mobile-column">
                <ul>
                  <li><a href={'/content/ปวดหลัง'}>ปวดหลัง</a></li>
                  <li><a href={'/content/ปวดเข่า'}>ปวดเข่า</a></li>
                  <li><a href={'/content/ปวดไหล่'}>ปวดไหล่</a></li>
                  <li><a href={'/content/ปวดคอ'}>ปวดคอ</a></li>
                  <li><a href={'/content/ปวดข้อมือ'}>ปวดข้อมือ</a></li>
                  <li><a href={'/content/กระดูกพรุน'}>กระดูกพรุน</a></li>
                </ul>
              </div>
              <div className="menu-mobile-column">
                <ul>
                  <li><a href={'/content/ปวดข้อศอก'}>ปวดข้อศอก</a></li>
                  <li><a href={'/content/ปวดสะโพก'}>ปวดสะโพก</a></li>
                  <li><a href={'/content/เกาต์'}>เกาต์</a></li>
                  <li><a href={'/content/โรคมือชา'}>โรคมือชา</a></li>
                  <li><a href={'/content/ข้อเข่าเทียม'}>ข้อเข่าเทียม</a></li>
                  <li><a href={'/content/กายภาพบำบัด'}>กายภาพบำบัด</a></li>
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
        <h5>Designed by Big Data Agency</h5>
      </Row>
    </div>
  );
};

export default Footer;
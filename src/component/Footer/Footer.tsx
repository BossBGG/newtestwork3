import {Col, Image, Row} from "react-bootstrap";
import './footer.css'
import logo from '../../assets/images/footer-logo.svg'
import fbLogo from '../../assets/images/fb.svg'
import ytLogo from '../../assets/images/yt.svg'
import lineLogo from '../../assets/images/line.svg'
import ttLogo from '../../assets/images/tt.svg'
import {Link} from "react-router";


const Footer = () => {
    return <div>
        <Row className={'footer p-5'}>
            <Col md={5} className={'center'}>
                <Row><Image className={'footer-logo'} src={logo} fluid={true}/></Row>
                <Row className={'mt-3 mb-3'}>
                    <text className={'footer-text'}>{'แพทย์ผู้เชี่ยวชาญกระดูกและข้อ ปัจจุบันทำงานเป็นอาจารย์ประจำ\n' +
                        'ภาควิชาออร์โธปิดิกส์ คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่'}</text>
                </Row>
            </Col>
            <Col md={5}>
                <Row><p>ความรู้กระดูกและข้อ</p></Row>
                <Row>
                    <Col xs={6}>
                        <ul>
                            <li><a href={'#content-0'}>ปวดหลัง</a></li>
                            <li><a href={'#content-1'}>ปวดเข่า</a></li>
                            <li><a href={'#content-2'}>ปวดไหล่</a></li>
                            <li><a href={'#content-553'}>ปวดคอ</a></li>
                            <li><a href={'#content-4'}>ปวดข้อมือ</a></li>
                            <li><a href={'#content-5'}>กระดูกพรุน</a></li>
                        </ul>
                    </Col>
                    <Col xs={6}>
                        <ul>
                            <li><a href={'#content-6'}>ปวดข้อศอก</a></li>
                            <li><a href={'#content-7'}>ปวดสะโพก</a></li>
                            <li><a href={'#content-8'}>เกาต์</a></li>
                            <li><a href={'#content-9'}>โรคมือชา</a></li>
                            <li><a href={'#content-10'}>ข้อเข่าเทียม</a></li>
                            <li><a href={'#content-11'}>กายภาพบำบัด</a></li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col md={2} className={'justify-content-between center mt-4 '}>
                <div className={'d-flex flex-row justify-content-center gap-3 flex-md-column gap-md-0'}>
                    <Row className={'mb-2'}><Link to={'https://www.facebook.com/backpainnonop'} target={'_blank'}><Image src={fbLogo} width={40} height={40} fluid={true} /></Link></Row>
                    <Row className={'mb-2'}><Link to={'https://www.youtube.com/@taninniitleerapun'} target={'_blank'}><Image src={ytLogo} width={40} height={40} fluid={true} /></Link></Row>
                    <Row className={'mb-2'}><Link to={'https://www.tiktok.com/@doctorkeng.chiangmai'} target={'_blank'}><Image src={ttLogo} width={40} height={40} fluid={true} /></Link></Row>
                    <Row className={'mb-2'}><Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'}><Image src={lineLogo} width={40} height={40} fluid={true} /></Link></Row>
                </div>
            </Col>
        </Row>
        <Row className={'footer-copy-right pt-3 pb-2 ps-5'}>
            <h5>Designed by Big Data Agency</h5>
        </Row>
    </div>
}

export default Footer
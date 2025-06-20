import {Col, Image, Row} from "react-bootstrap";
import './from-customer.css'
// import {Slide} from "react-slideshow-image";
import Comment1 from '../../assets/images/from-customer/commnet-4.svg'
import Comment2 from '../../assets/images/from-customer/commnet-2.svg'
import Comment3 from '../../assets/images/from-customer/commnet-3.svg'
// import { Slide } from "react-slideshow-image";
import Slider from "react-slick";
import Social from "../Social/Social.tsx";
// import CommentALl from '../../assets/images/from-customer/comment-all.svg'
const FromCustomer=()=>{
    const settings = {
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay:true,
        centerMode: true,
        arrows:false,
        speed: 300,
        // beforeChange: function(currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function(currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    };
    return (
        <Row className={'content '}>
            <Col md={1}/>
            <Col md={10}>
                <Row><h2>หลากหลายเรื่องราว</h2></Row>
                <Row><h1>จากผู้ใช้บริการ</h1></Row>
                <Row><p className={'mb-4 content-text'}>อาการปวดกระดูกและข้อทำให้ชีวิตขาดความสุข การรักษากับแพทย์ผู้เชี่ยวชาญช่วยให้กลับมาใช้ชีวิตได้ดีขึ้น หมอเก่ง ผศ.นพ.ธนินนิตย์ ลีรพันธ์ แพทย์ผู้เชี่ยวชาญด้านกระดูกและข้อ  จบการศึกษาจากคณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่และศึกษาต่อด้านเนื้องอกของกระดูกและเนื้อเยื่ออ่อน
                    ที่ Mayo Clinic สหรัฐอเมริการวมถึงอบรมการผ่าตัดเปลี่ยนข้อเทียมที่ Western Ontario University ประเทศแคนาดา  ด้วยความรู้และประสบการณ์ พร้อมเครื่องมือมาตรฐานสากล และเทคโนโลยีอัลตร้าซาวด์ที่แม่นยำ ช่วยให้การรักษาเป็นไปอย่างตรงจุด โดยไม่ต้องผ่าตัด</p></Row>
                <Row className={'row-gap-3'}>
                    <Col md={6} onClick={()=>{
                        console.log('click iframe')
                    }}>
                        <iframe className={'video-player rounded-4'}
                                src="https://www.youtube.com/embed/TziuZyASUys?si=Tm97j2n7U-R7yhKY&amp;controls=0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer;encrypted-media; gyroscope; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </Col>
                    <Col md={6}>
                        {/*<Image  src={CommentALl} fluid={true}/>*/}
                        {/*<Slide indicators={true} cssClass={'slider'} infinite={true} vertical={true} slidesToScroll={1} slidesToShow={3} arrows={false}>*/}
                        {/*    /!*<Row><Image src={CommentALl}/> </Row>*!/*/}
                        {/*    <Row><Image src={Comment2}/></Row>*/}
                        {/*    <Row><Image src={Comment1}/></Row>*/}
                        {/*    <Row><Image src={Comment3}/></Row>*/}
                        {/*</Slide>*/}
                        <div className={'slider-container'}>
                            <Slider {...settings}>
                                <div><Image src={Comment2} fluid={true}/></div>
                                <div><Image src={Comment1} fluid={true}/></div>
                                <div><Image src={Comment3} fluid={true}/></div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12}>
                <Social/>
            </Col>
        </Row>
    )
}
export default FromCustomer
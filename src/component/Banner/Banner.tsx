import { Carousel, Image, Row} from "react-bootstrap";
import Banner1 from "../../assets/images/main-banner.svg"
import './banner.css'
import {Link} from "react-router";

export interface Prop {
    images?: BannerData[]
}

export interface BannerData {
    url: string,
    title?: string,
    detail?: string
    detail2?: string
    detail3?: string
    button?:string
}

const example: BannerData[] = [
    {
        url: Banner1, title: 'ทำอย่างไร ?',
        detail: 'หากปวดหลัง\n' +
            'ปวดคอ ปวดไหล่\n' +
            'ไม่อยากผ่าตัด',
        detail2:'หมอเก่ง ผศ.นพ.ธนินนิตย์ ลีรพันธ์',
        detail3:'แพทย์ผู้เชี่ยวชาญกระดูกและข้อ รักษาอาการปวดหลังได้ โดยไม่ต้องผ่าตัด เชิญปรึกษาเราได้ที่นี่',
        button:'ปรึกษาปัญหาได้ที่นี่'
    }
]

const Banner = ({images = example}: Prop) => {
    return <Row>
            <Carousel className={'p-0'}>
                {images?.map((data: BannerData) => {
                    return <Carousel.Item>
                        <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'}>
                            <Image className={'banner-slider'} src={data.url} fluid={true}/>
                        </Link>
                        <Carousel.Caption>
                            {/*<h3>{data.title}</h3>*/}
                            {/*<p>{data.detail}</p>*/}
                        </Carousel.Caption>
                        {/*<Row>*/}
                        {/*    <Col md={1} className={'banner-left'}/>*/}
                        {/*    <Col md={3} className={'banner-left'}>*/}
                        {/*        <Row>*/}
                        {/*            <text className={'banner-header'}>{data.title}</text>*/}
                        {/*        </Row>*/}
                        {/*        <Row>*/}
                        {/*            <text className={'banner-detail'}>{data.detail}</text>*/}
                        {/*        </Row>*/}
                        {/*        <Row>*/}
                        {/*            <text className={'banner-detail2'}>{data.detail2}</text>*/}
                        {/*        </Row>*/}
                        {/*        <Row>*/}
                        {/*            <div className={'banner-divider'}></div>*/}
                        {/*        </Row>*/}
                        {/*        <Row>*/}
                        {/*            <text className={'banner-detail3'}>{data.detail3}</text>*/}
                        {/*        </Row>*/}
                        {/*        <Row className={'center'}>*/}
                        {/*            {data.button && <Button className={'line-btn'}>{data.button}</Button>}*/}
                        {/*        </Row>*/}
                        {/*    </Col>*/}
                        {/*    <Col md={2} className={'banner-left'}/>*/}
                        {/*    <Col md={6}>*/}
                        {/*        <Image className={'banner-slider'} src={data.url} fluid={false}/>*/}
                        {/*        <Carousel.Caption>*/}
                        {/*            /!*<h3>{data.title}</h3>*!/*/}
                        {/*            /!*<p>{data.detail}</p>*!/*/}
                        {/*        </Carousel.Caption>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}

                    </Carousel.Item>
                })}
            </Carousel>
    </Row>
}

export default Banner
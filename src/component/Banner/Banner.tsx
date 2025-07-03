import React from 'react';
import { Carousel, Image, Row } from "react-bootstrap";
import Banner1 from "../../assets/images/main-banner.svg"
import BannerMobile from "../../assets/images/bannermobile.png"
import './banner.css'
import { Link } from "react-router";

export interface Prop {
    images?: BannerData[]
}

export interface BannerData {
    url: string,
    mobileUrl?: string, // เพิ่ม property สำหรับ mobile
    title?: string,
    detail?: string
    detail2?: string
    detail3?: string
    button?: string
}

const example: BannerData[] = [
    {
        url: Banner1,
        mobileUrl: BannerMobile, // เพิ่ม mobile image
        title: 'ทำอย่างไร ?',
        detail: 'หากปวดหลัง\n' +
            'ปวดคอ ปวดไหล่\n' +
            'ไม่อยากผ่าตัด',
        detail2: 'หมอเก่ง ผศ.นพ.ธนินนิตย์ ลีรพันธ์',
        detail3: 'แพทย์ผู้เชี่ยวชาญกระดูกและข้อ รักษาอาการปวดหลังได้ โดยไม่ต้องผ่าตัด เชิญปรึกษาเราได้ที่นี่',
        button: 'ปรึกษาปัญหาได้ที่นี่'
    }
]

const Banner = ({ images = example }: Prop) => {
    return <Row>
        <Carousel className={'p-0'}>
            {images?.map((data: BannerData, index: number) => {
                return <Carousel.Item key={index}>
                    <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'}>
                        {/* Desktop Image */}
                        <Image 
                            className={'banner-slider d-none d-md-block'} 
                            src={data.url} 
                            fluid={true}
                        />
                        {/* Mobile Image */}
                        <Image 
                            className={'banner-slider-mobile d-md-none'} 
                            src={data.mobileUrl || data.url} 
                            fluid={true}
                        > </Image>
                    </Link>
                    
                </Carousel.Item>
            })}
        </Carousel>
    </Row>
}

export default Banner
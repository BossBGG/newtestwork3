import {Container, Image, Row} from "react-bootstrap";
import '../App.css'
import Banner from "../component/Banner/Banner.tsx";
import ContentCard from "../component/ContentCard/ContentCard.tsx";
import Blog from "../component/Blog/Blog.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import FromCustomer from "../component/FromCustomer/FromCustomer.tsx";
import ContactUs from "../component/ContactUs/ContactUs.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DrImage from '../assets/images/dr-keng.svg'
import {PlayLists, Videos} from "../model/YoutubeModel.tsx";
import Footer from "../component/Footer/Footer.tsx";
// import Article from "../component/Article/Article.tsx";
import {useLocation} from "react-router";
import Recommend from "../component/Recommend/Recommend.tsx";
import About from "../component/About/About.tsx";
import { useLanguage } from '../i18n/config'; // เพิ่มการ import

export interface YoutubeData{
    playlists:PlayLists,
    videos:Videos[]
}

const apiUrl = import.meta.env.VITE_API_URL;

const MainApp = () => {
    const [playlistData,setPlaylistData] = useState<YoutubeData>();
    const location = useLocation();
    const { t } = useLanguage(); // เพิ่มการใช้ hook

    console.log(location);
    const getPlaylist = async () =>{
      const response = await axios.get(apiUrl + '/api/get-list')
        if(response.status){
            setPlaylistData(response.data.data)
        }

    }

    useEffect(() => {
        getPlaylist()
    }, []);
    return (
        <Container className={'App pb-0 mb-0'}>
            <Banner/>
            <Row className={'center mt-4 mb-4'}>
                <h2 className={'text-sub-head'}>{t('mainpage.bone_joint_knowledge')}</h2>
                <h1 className={'text-header'} style={{fontSize: '1.9rem'}}>
                    {t('mainpage.categories_subtitle')}
                </h1>
            </Row>
ฃ
            <Blog />
            
            <Recommend/>
            <About />
            <FromCustomer/>
            <ContactUs/>
            <Footer/>
        </Container>

        
    )
}

export default MainApp
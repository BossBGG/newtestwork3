import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';
import RecommendCard from './RecommendCard.tsx';
import { useLanguage } from '../../i18n/config';
import './recommend.css';

interface VideoItem {
  url: string;
  videoKey: string; 
  thumbnail: string;
}

// ข้อมูลวิดีโอแนะนำ - เก็บเฉพาะ URL, videoKey และ thumbnail
const recommendedVideos: VideoItem[] = [
  {
    url: 'https://youtu.be/CYZ3nXXUzJc',
    videoKey: 'video1',
    thumbnail: 'https://i.ytimg.com/an_webp/CYZ3nXXUzJc/mqdefault_6s.webp?du=3000&sqp=CKv7xsQG&rs=AOn4CLAGbSZDdAiQZ99Su5KUilWp468gCw',
  },
  {
    url: 'https://youtu.be/gu214y1GkrY',
    videoKey: 'video2',
    thumbnail: 'https://i.ytimg.com/an_webp/gu214y1GkrY/mqdefault_6s.webp?du=3000&sqp=CPL_xsQG&rs=AOn4CLB1SwxHwy7Sk3YrQgDxei3u7By25A',
  },
  {
    url: 'https://youtu.be/0OlkL6k5fo4',
    videoKey: 'video3',
    thumbnail: 'https://i.ytimg.com/an_webp/0OlkL6k5fo4/mqdefault_6s.webp?du=3000&sqp=CNSHx8QG&rs=AOn4CLBXWf_z93vOLW8AqhjWLcURQWOqlg',
  },
  {
    url: 'https://youtu.be/P0zaFHZOdiI',
    videoKey: 'video4',
    thumbnail: 'https://i.ytimg.com/an_webp/P0zaFHZOdiI/mqdefault_6s.webp?du=3000&sqp=CKTZxsQG&rs=AOn4CLDnGRfDgU4-FHx04F_9OP5j-G8k2A',
  },
  {
    url: 'https://youtu.be/qbx07OMnwUc',
    videoKey: 'video5',
    thumbnail: 'https://i.ytimg.com/an_webp/qbx07OMnwUc/mqdefault_6s.webp?du=3000&sqp=CMj6xsQG&rs=AOn4CLDwK2uuuvd12ojc2X47KC9ElF8tvQ',
  },
  {
    url: 'https://youtu.be/ZMy7-ipDPp4',
    videoKey: 'video6',
    thumbnail: 'https://i.ytimg.com/an_webp/ZMy7-ipDPp4/mqdefault_6s.webp?du=3000&sqp=CKrdxsQG&rs=AOn4CLBaa3ykdiLZNh1WjTxYVnXILc6Dug',
  },
   {
    url: 'https://youtu.be/8VkReTDOwCo',
    videoKey: 'video7',
    thumbnail: 'https://i.ytimg.com/an_webp/8VkReTDOwCo/mqdefault_6s.webp?du=3000&sqp=CLzfxsQG&rs=AOn4CLCxdoJnuVMIj_F1lM3rc3chV42zUQ',
  },
  {
    url: 'https://youtu.be/87hXLKqEvf4',
    videoKey: 'video8',
    thumbnail: 'https://i.ytimg.com/an_webp/87hXLKqEvf4/mqdefault_6s.webp?du=3000&sqp=COryxsQG&rs=AOn4CLBtva6hbfx4oyz4Pk8PH2eYVqScuw',
  },
  {
    url: 'https://youtu.be/uVpcuj5Svdg',
    videoKey: 'video9',
    thumbnail: 'https://i.ytimg.com/an_webp/uVpcuj5Svdg/mqdefault_6s.webp?du=3000&sqp=CNjUxsQG&rs=AOn4CLC5DLSc5E0TnuU0AvgTKdO5-eQmCA',
  },
];

// ข้อมูลวิดีโอยอดนิยม
const popularVideos: VideoItem[] = [
  {
    url: 'https://youtu.be/6ccAg_6Afmo',
    videoKey: 'video1',
    thumbnail: 'https://i.ytimg.com/an_webp/6ccAg_6Afmo/mqdefault_6s.webp?du=3000&sqp=CK77xsQG&rs=AOn4CLAxnR298jrXA38gMOB6xu9WTsSgjg',
  },
  {
    url: 'https://youtu.be/iETH2cWD6-k',
    videoKey: 'video2',
    thumbnail: 'https://i.ytimg.com/an_webp/iETH2cWD6-k/mqdefault_6s.webp?du=3000&sqp=CM_sxsQG&rs=AOn4CLDjW9TajsHjAqnSShYY12Tt57CBtA',
  },
  {
    url: 'https://youtu.be/YIj_rIN83Jg',
    videoKey: 'video3',
    thumbnail: 'https://i.ytimg.com/an_webp/YIj_rIN83Jg/mqdefault_6s.webp?du=3000&sqp=CJDuxsQG&rs=AOn4CLDeR3Zq_3rBKaG1yHWrKWeZy6pa3w',
  },
  {
    url: 'https://youtu.be/q-wMVOQw9s8',
    videoKey: 'video4',
    thumbnail: 'https://i.ytimg.com/vi/q-wMVOQw9s8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCETIHuhdf-9UFvNs1GXebzDQi19A',
  },
  {
    url: 'https://youtu.be/LMLvy-q5rnM',
    videoKey: 'video5',
    thumbnail: 'https://i.ytimg.com/vi/LMLvy-q5rnM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgSigrMA8=&rs=AOn4CLAF9piMszjw42a9tot4aLc1MIvVMQ',
  },
  {
    url: 'https://youtu.be/9lSM2--NnsI',
    videoKey: 'video6',
    thumbnail: 'https://i.ytimg.com/an_webp/9lSM2--NnsI/mqdefault_6s.webp?du=3000&sqp=CJb0xsQG&rs=AOn4CLCpLR8LwAQ1FTtR-HZJYOJ7oOByPw',
  },
];

// ฟังก์ชันสำหรับ Carousel arrows
const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="recommend-arrow recommend-next" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="recommend-arrow recommend-prev" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
      </svg>
    </div>
  );
};

const VideoCarousel: React.FC<{ 
  videos: VideoItem[], 
  tabType: 'recommended' | 'popular' 
}> = ({ videos, tabType }) => {
  const { t } = useLanguage();
  
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="recommend-carousel-container">
      <Slider {...settings}>
        {videos.map((video, index) => {
       
          const videoTitle = t(`recommend.videos.${tabType}.${video.videoKey}`);
          
        
          const translatedVideo = {
            url: video.url,
            title: videoTitle,
            thumbnail: video.thumbnail
          };
          
          return (
            <RecommendCard 
              key={index} 
              video={translatedVideo}
            />
          );
        })}
      </Slider>
    </div>
  );
};

const Recommend: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'recommended' | 'popular'>('recommended');

  const currentVideos = activeTab === 'recommended' ? recommendedVideos : popularVideos;

  return (
    <div className="recommend-section">
      <h1 className="recommend-title">{t('recommend.title')}</h1>

      <Container className="recommend-container">
        <Row>
          <Col xs={12}>
            <div className="recommend-header">
              <div className="recommend-tabs">
                <button 
                  className={`recommend-tab ${activeTab === 'recommended' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recommended')}
                >
                  {t('recommend.tabs.recommended')}
                </button>
                <button 
                  className={`recommend-tab ${activeTab === 'popular' ? 'active' : ''}`}
                  onClick={() => setActiveTab('popular')}
                >
                  {t('recommend.tabs.popular')}
                </button>
              </div>
            </div>

            <VideoCarousel videos={currentVideos} tabType={activeTab} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recommend;
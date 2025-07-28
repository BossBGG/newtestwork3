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
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video1',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video2',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video3',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video4',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video5',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video6',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  }
];

// ข้อมูลวิดีโอยอดนิยม
const popularVideos: VideoItem[] = [
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video1',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video2',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video3',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video4',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  },
  {
    url: 'https://www.youtube.com/watch?v=04_Znifwy98',
    videoKey: 'video5',
    thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg',
  }
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
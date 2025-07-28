import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import { ContentItems, ContentData } from '../../data/ContentData.tsx';
import BlogCard from './BlogCard.tsx';
import YTIcon from '../../assets/images/yt-icon.png';
import { useLanguage } from '../../i18n/config';
import './blog.css';

// ข้อมูลคลิป YouTube สำหรับแต่ละหมวดหมู่ (เก็บ URL และ thumbnail ไว้เหมือนเดิม)
const videosByCategory: { [key: string]: { url: string; videoKey: string; thumbnail: string }[] } = {
  'ปวดไหล่': [
    {
      url: 'https://www.youtube.com/watch?v=04_Znifwy98',
      videoKey: 'video1',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video2',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video3',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video4',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video5',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video6',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video7',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video8',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    }
  ],
  'ปวดหลัง': [
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video1',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video2',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video3',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video4',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video5',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    },
    {
      url: 'https://www.youtube.com/watch?v=9f4EaOkOMd8&t=6s',
      videoKey: 'video6',
      thumbnail: 'https://i.ytimg.com/vi/9f4EaOkOMd8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBuqqi1brHLaBzfQ2z7Edyk3FIykg'
    }
  ]
  
  // เพิ่มข้อมูลสำหรับหมวดหมู่อื่นๆ ตามต้องการ
};

// ฟังก์ชันสำหรับ Carousel arrows
const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
      </svg>
    </div>
  );
};

const VideoCarousel: React.FC<{ 
  videos: { url: string; videoKey: string; thumbnail: string }[], 
  categoryKey: string 
}> = ({ videos, categoryKey }) => {
  const { t } = useLanguage();
  
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="video-carousel-container">
      <Slider {...settings}>
        {videos.map((video, index) => {
          // ดึง title จาก translation
          const videoTitle = t(`blog.videos.${categoryKey}.${video.videoKey}`);
          
          return (
            <BlogCard 
              key={index} 
              videoUrl={video.url}
              title={videoTitle}
              thumbnail={video.thumbnail}
            />
          );
        })}
      </Slider>
    </div>
  );
};

const BlogCategory: React.FC<{ content: ContentData; index: number }> = ({ content, index }) => {
  const { t } = useLanguage();
  const videos = videosByCategory[content.title] || [];
  
  // แก้ไขวิธีการดึงข้อมูลหมวดหมู่จาก translation
  const categoryTitle = t(`blog.categories.${content.title}.title`) || content.title;
  const categoryDetail = t(`blog.categories.${content.title}.detail`) || content.detail;
  
  return (
    <Container className="blog-category-container" id={`category-${index}`}>
      {/* Desktop Layout */}
      <Row className="category-header d-none d-md-flex">
        <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
          <Image src={content.image} width={200} fluid className="category-image" />
        </Col>
        <Col xs={12} md={9} className="text-center text-md-start mb-3 mb-md-0">
          <h1 className="category-title">{categoryTitle}</h1>
          <p className="category-detail" style={{ marginTop: '8px'}}>{categoryDetail}</p>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <Row className="category-header d-md-none">
        <Col xs={4} className="text-center">
          <Image src={content.image} width={120} fluid className="category-image" />
        </Col>
        <Col xs={8} className="text-start d-flex flex-column justify-content-center">
          <h1 className="category-title">{categoryTitle}</h1>
        </Col>
        <Col xs={12} className="mt-3">
          <p className="category-detail">{categoryDetail}</p>
        </Col>
      </Row>

      {videos.length > 0 && (
        <Row className="video-section">
          <Col xs={12}>
            <div className="video-header">
              <Image src={YTIcon} width={60} height={60} className="me-2" />
              <span className="video-label">{t('blog.latest')}</span>
            </div>
            <VideoCarousel videos={videos} categoryKey={content.title} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      {ContentItems.map((content, index) => (
        <BlogCategory key={index} content={content} index={index} />
      ))}
    </div>
  );
};

export default Blog;
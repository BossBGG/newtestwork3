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
      url: 'https://youtu.be/jadYBZusTLg?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video1',
      thumbnail: 'https://i.ytimg.com/vi/jadYBZusTLg/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYYiBiKGIwDw==&rs=AOn4CLCEMKbuqVa3gpNIqQLLdR_THFb3Yg'
    },
    {
      url: 'https://youtu.be/2Cl3C0rCnis?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video2',
      thumbnail: 'https://i.ytimg.com/vi/2Cl3C0rCnis/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYWSBdKGUwDw==&rs=AOn4CLD243rrx5ucNccqKfwaYXGXNeNVgg'
    },
    {
      url: 'https://youtu.be/sBu42GMiDY0?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video3',
      thumbnail: 'https://i.ytimg.com/vi/sBu42GMiDY0/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLCdd7jlEtaG7xfKT3QggkL4uLOgUg'
    },
    {
      url: 'https://youtu.be/Yi26JFd94O8?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video4',
      thumbnail: 'https://i.ytimg.com/vi/Yi26JFd94O8/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYZSBLKEIwDw==&rs=AOn4CLADvYtt6Kkh7_YrPaAJ3g6URWxKLA'
    },
    {
      url: 'https://youtu.be/KpqKbRjNmWM?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video5',
      thumbnail: 'https://i.ytimg.com/vi/KpqKbRjNmWM/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYciBTKEIwDw==&rs=AOn4CLAAXgpsS0GLNYjtMShm8RaiJ2DSpQ'
    },
    {
      url: 'https://youtu.be/iu62i0oVF10?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video6',
      thumbnail: 'https://i.ytimg.com/vi/iu62i0oVF10/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYciBSKDswDw==&rs=AOn4CLDW-XQwTD5g18lfT10tV7bcyGyYTw'
    },
    {
      url: 'https://youtu.be/uwJVauLFuOY?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video7',
      thumbnail: 'https://i.ytimg.com/vi/uwJVauLFuOY/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYZSBWKEwwDw==&rs=AOn4CLAhB3CUU4j8wi9DO9XazeEM8z1Khg'
    },
    {
      url: 'https://youtu.be/-elWD2owrf4?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video8',
      thumbnail: 'https://i.ytimg.com/vi/hhyoKq7_kco/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYZSBdKFQwDw==&rs=AOn4CLDZMU6rDPBSlolmOqdId4EhvWp6oA'
    },
    {
      url: 'https://youtu.be/OZTx4hC5ZaI?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video9',
      thumbnail: 'https://i.ytimg.com/vi/OZTx4hC5ZaI/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYSCBTKGUwDw==&rs=AOn4CLCSzblg8oHs4joKEwNUmEEwcAqkxg'
    },
    {
      url: 'https://youtu.be/bw8JPQ3E2ew?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video10',
      thumbnail: 'https://i.ytimg.com/vi/bw8JPQ3E2ew/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYciBUKD0wDw==&rs=AOn4CLAIAHuM525t_AW3Ngfo8qo8-1sAyw'
    },
  ],
  'ปวดหลัง': [
    {
      url: 'https://youtu.be/iXYknwu_3Qw?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video1',
      thumbnail: 'https://i.ytimg.com/vi/iXYknwu_3Qw/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYSyBUKGUwDw==&rs=AOn4CLCBFVtQ5TIkdpbjLS5S88NzHFxHRg'
    },
    {
      url: 'https://youtu.be/VqOxzA7rCCI?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video2',
      thumbnail: 'https://i.ytimg.com/vi/VqOxzA7rCCI/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYYiBiKGIwDw==&rs=AOn4CLAgO5yg5ri9LzWeJLdKdhFZQzij6w'
    },
    {
      url: 'https://youtu.be/cIuCw67R134?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video3',
      thumbnail: 'https://i.ytimg.com/vi/cIuCw67R134/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYRiATKH8wDw==&rs=AOn4CLAFa_KrcU92fUm0Fs3rl169DLOrJA'
    },
    {
      url: 'https://youtu.be/Yi26JFd94O8?list=PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X',
      videoKey: 'video4',
      thumbnail: 'https://i.ytimg.com/vi/BeFVHywqLIY/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYOSBYKHIwDw==&rs=AOn4CLAk2QP9MmKmXj19D-BdVPHiHaUH1w'
    },
    {
      url: 'https://youtu.be/0zA7Oo8v8hQ?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video5',
      thumbnail: 'https://i.ytimg.com/vi/0zA7Oo8v8hQ/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYciBKKC8wDw==&rs=AOn4CLA_bwffVOLaBeNJ-Xpq8wU5ezjRtw'
    },
    {
      url: 'https://youtu.be/JbQHdjUX3UA?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video6',
      thumbnail: 'https://i.ytimg.com/vi/JbQHdjUX3UA/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYZSBXKE8wDw==&rs=AOn4CLCmwNgIzt_oGxXet0bfkSM5srnGmw'
    },
    {
      url: 'https://youtu.be/djqtnVcg6ZE?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video7',
      thumbnail: 'https://i.ytimg.com/vi/djqtnVcg6ZE/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYTSBSKGUwDw==&rs=AOn4CLAgrV4VTboMS23peN8QCrbgfS6DbA'
    },
    {
      url: 'https://youtu.be/hP0hbL7aPd0?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video8',
      thumbnail: 'https://i.ytimg.com/vi/hP0hbL7aPd0/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYSCBSKGUwDw==&rs=AOn4CLA3O0VdsgXwrMeCY-_3GYkIkw7m1g'
    },
    {
      url: 'https://youtu.be/ZtrELvtozQY?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video9',
      thumbnail: 'https://i.ytimg.com/vi/ZtrELvtozQY/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYciBNKDUwDw==&rs=AOn4CLCoCMIwePb9D1Bxi-nSHmue4Ah8Dw'
    },
    {
      url: 'https://youtu.be/ZHB6Yd0z2P0?list=PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL',
      videoKey: 'video10',
      thumbnail: 'https://i.ytimg.com/vi/ZHB6Yd0z2P0/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Ac4FgAKACooCDAgAEAEYQyBLKGUwDw==&rs=AOn4CLD5au6fp8JyE-eI8reMqsRnS59Gdw'
    },
  ],
  

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
/*

*/ 

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import { ContentItems, ContentData } from '../../data/ContentData.tsx';
import BlogCard from './BlogCard.tsx';
import YTIcon from '../../assets/images/yt-icon.png';
import { useLanguage } from '../../i18n/config';
import './blog.css';
import axios from 'axios';

// Interface สำหรับข้อมูลวิดีโอจาก YouTube API
interface YouTubeVideo {
  id: {
    videoId?: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
  };
  statistics?: {
    viewCount: string;
  };
}

interface ProcessedVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  viewCount: string;
  url: string;
}

// กำหนด Playlist ID หรือ Search Query หรือ Direct Links สำหรับแต่ละหมวดหมู่
const categoryConfig: { [key: string]: { type: 'playlist' | 'search' | 'multi-search' | 'direct-links'; value: string | string[] } } = {
  'ปวดไหล่': { type: 'playlist', value: 'PLRmpWdWX6cKquaVyDaneDz25HwNKzrT0X' },
  'ปวดหลัง': { type: 'playlist', value: 'PLRmpWdWX6cKp5dERnvb6JWG1URdmuIemL' },
  'ปวดเข่า': { type: 'playlist', value: 'PLRmpWdWX6cKqpS9F0pSaZAVndvtAXM7zL' },
  'ปวดคอ': { type: 'playlist', value: 'PLRmpWdWX6cKo5WURRZzHj3_qvporJly7g' },
  'ปวดเท้าและข้อเท้า': { type: 'playlist', value: 'PLRmpWdWX6cKrRByG9LwEG7yeBJlZwgyJa' },
  'ปวดข้อมือ': { type: 'playlist', value: 'PLRmpWdWX6cKqKB0dO3F0JO1RB1XyjStd6' },
  'กระดูกพรุน': { type: 'playlist', value: 'PLRmpWdWX6cKojfWKQ5HrtT_LaOmTGvghz' },
  'ปวดข้อศอก': { type: 'playlist', value: 'PLRmpWdWX6cKp3BcTKU9S83eRTusNilDD7' },
  'ปวดสะโพก': { type: 'playlist', value: 'PLRmpWdWX6cKrCtr7L6aw1tca-WGOER79Q' },
  'เกาต์': { type: 'playlist', value: 'PLRmpWdWX6cKr5nuxrCXUu22Li4u0tGajY' },
  'โรคมือชา': { type: 'playlist', value: 'PLRmpWdWX6cKq3gNyfQ0z3yinwCe9sjNdG' },
  'ข้อเข่าเทียม': { type: 'playlist', value: 'PLRmpWdWX6cKqJ-OlvYWelerQkoWnoLVad' },
  'กายภาพบำบัด': { 
    type: 'direct-links', 
    value: [
      'https://www.youtube.com/watch?v=2_-wa2lOP3w',
      'https://www.youtube.com/watch?v=LN9E9yjmkPo', 
      'https://www.youtube.com/watch?v=PbNI0Har1sM',
      'https://www.youtube.com/watch?v=PhlIQGsAy7A',
      'https://www.youtube.com/watch?v=LDI1c4sa2jI'
     
    ]
  },
};

// YouTube API Configuration
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const CHANNEL_ID = ''; 

// ฟังก์ชันสำหรับหา Channel ID จาก Username หรือ Handle
const getChannelId = async (usernameOrHandle: string): Promise<string | null> => {
  try {
    // ลองค้นหาจาก forHandle (สำหรับ @username)
    let response = await axios.get(
      `${YOUTUBE_API_BASE_URL}/channels`,
      {
        params: {
          key: YOUTUBE_API_KEY,
          forHandle: usernameOrHandle.replace('@', ''), // เอา @ ออก
          part: 'id'
        }
      }
    );

    if (response.data.items && response.data.items.length > 0) {
      return response.data.items[0].id;
    }

    // ถ้าไม่พบ ลองค้นหาจาก forUsername (สำหรับ username เก่า)
    response = await axios.get(
      `${YOUTUBE_API_BASE_URL}/channels`,
      {
        params: {
          key: YOUTUBE_API_KEY,
          forUsername: usernameOrHandle.replace('@', ''),
          part: 'id'
        }
      }
    );

    if (response.data.items && response.data.items.length > 0) {
      return response.data.items[0].id;
    }

    return null;
  } catch (error) {
    console.error('Error getting channel ID:', error);
    return null;
  }
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

// ฟังก์ชันสำหรับดึงข้อมูลวิดีโอจากลิงก์โดยตรง
const fetchVideosByDirectLinks = async (videoUrls: string[]): Promise<ProcessedVideo[]> => {
  try {
    // แปลง URL เป็น Video ID
    const videoIds = videoUrls.map(url => {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
      return match ? match[1] : null;
    }).filter(id => id !== null);

    if (videoIds.length === 0) {
      return [];
    }

    // ดึงข้อมูลวิดีโอทั้งหมดในครั้งเดียว
    const processedVideos: ProcessedVideo[] = [];
    const batchSize = 50; 

    for (let i = 0; i < videoIds.length; i += batchSize) {
      const batch = videoIds.slice(i, i + batchSize);
      const videoIdsString = batch.join(',');

      const response = await axios.get(
        `${YOUTUBE_API_BASE_URL}/videos`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            id: videoIdsString,
            part: 'snippet,statistics'
          }
        }
      );

      if (response.data.items) {
        const batchProcessed = response.data.items.map((item: any) => ({
          videoId: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          viewCount: item.statistics?.viewCount || '0',
          url: `https://www.youtube.com/watch?v=${item.id}`
        }));

        processedVideos.push(...batchProcessed);
      }
    }


    processedVideos.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });

    return processedVideos;
  } catch (error) {
    console.error('Error fetching videos by direct links:', error);
    return [];
  }
};
// ฟังก์ชันสำหรับค้นหาวิดีโอจากหลายคำค้นหา
const searchMultipleQueries = async (searchQueries: string[], channelId?: string): Promise<ProcessedVideo[]> => {
  try {
    let allVideos: any[] = [];
    const videoIdSet = new Set<string>(); 

    
    for (const query of searchQueries) {
      const videos = await searchYouTubeVideos(query, channelId);
      
      
      const uniqueVideos = videos.filter(video => {
        if (videoIdSet.has(video.videoId)) {
          return false;
        }
        videoIdSet.add(video.videoId);
        return true;
      });

      allVideos = [...allVideos, ...uniqueVideos];
    }

    
    allVideos.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });

    
    return allVideos.slice(0, 50);
  } catch (error) {
    console.error('Error searching multiple queries:', error);
    return [];
  }
};
const searchYouTubeVideos = async (searchQuery: string, channelId?: string): Promise<ProcessedVideo[]> => {
  try {
    let allVideos: any[] = [];
    let nextPageToken = '';
    const maxResults = 50;

    //ค้นหาวิดีโอ
    do {
      const searchResponse = await axios.get(
        `${YOUTUBE_API_BASE_URL}/search`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            q: searchQuery,
            channelId: channelId || undefined, 
            part: 'snippet',
            type: 'video',
            order: 'date', 
            maxResults: Math.min(50, maxResults - allVideos.length),
            pageToken: nextPageToken || undefined
          }
        }
      );

      if (!searchResponse.data.items) {
        break;
      }

      allVideos = [...allVideos, ...searchResponse.data.items];
      nextPageToken = searchResponse.data.nextPageToken || '';

    } while (nextPageToken && allVideos.length < maxResults);

    if (allVideos.length === 0) {
      return [];
    }

    //ดึงข้อมูลสถิติของวิดีโอ (views) 
    const processedVideos: ProcessedVideo[] = [];
    const batchSize = 50;

    for (let i = 0; i < allVideos.length; i += batchSize) {
      const batch = allVideos.slice(i, i + batchSize);
      const videoIds = batch
        .map((item: any) => item.id.videoId)
        .join(',');

      const statisticsResponse = await axios.get(
        `${YOUTUBE_API_BASE_URL}/videos`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            id: videoIds,
            part: 'statistics'
          }
        }
      );

      //รวมข้อมูล
      const batchProcessed = batch.map((item: any) => {
        const videoId = item.id.videoId;
        const statistics = statisticsResponse.data.items?.find(
          (stat: any) => stat.id === videoId
        );

        return {
          videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          viewCount: statistics?.statistics?.viewCount || '0',
          url: `https://www.youtube.com/watch?v=${videoId}`
        };
      });

      processedVideos.push(...batchProcessed);
    }

    return processedVideos;
  } catch (error) {
    console.error('Error searching YouTube videos:', error);
    return [];
  }
};

// ฟังก์ชันสำหรับดึงข้อมูลวิดีโอทั้งหมดจาก YouTube API (Playlist)
const fetchAllYouTubeVideos = async (playlistId: string): Promise<ProcessedVideo[]> => {
  try {
    let allVideos: any[] = [];
    let nextPageToken = '';

    //ดึงวิดีโอทั้งหมดจาก playlist 
    do {
      const playlistResponse = await axios.get(
        `${YOUTUBE_API_BASE_URL}/playlistItems`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            playlistId: playlistId,
            part: 'snippet',
            maxResults: 50, 
            pageToken: nextPageToken || undefined
          }
        }
      );

      if (!playlistResponse.data.items) {
        break;
      }

      allVideos = [...allVideos, ...playlistResponse.data.items];
      nextPageToken = playlistResponse.data.nextPageToken || '';

    } while (nextPageToken);

    if (allVideos.length === 0) {
      return [];
    }


    allVideos.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateB.getTime() - dateA.getTime(); // เรียงจากใหม่ไปเก่า
    });

    // ดึงข้อมูลสถิติของวิดีโอ (views) 
    const processedVideos: ProcessedVideo[] = [];
    const batchSize = 50; 

    for (let i = 0; i < allVideos.length; i += batchSize) {
      const batch = allVideos.slice(i, i + batchSize);
      const videoIds = batch
        .map((item: any) => item.snippet.resourceId.videoId)
        .join(',');

      const statisticsResponse = await axios.get(
        `${YOUTUBE_API_BASE_URL}/videos`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            id: videoIds,
            part: 'statistics'
          }
        }
      );

      //รวมข้อมูล
      const batchProcessed = batch.map((item: any) => {
        const videoId = item.snippet.resourceId.videoId;
        const statistics = statisticsResponse.data.items?.find(
          (stat: any) => stat.id === videoId
        );

        return {
          videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          viewCount: statistics?.statistics?.viewCount || '0',
          url: `https://www.youtube.com/watch?v=${videoId}`
        };
      });

      processedVideos.push(...batchProcessed);
    }

    return processedVideos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};

// ฟังก์ชันหลักสำหรับดึงวิดีโอตามประเภท (Playlist, Search, หรือ Direct Links)
const fetchVideosByCategory = async (category: string): Promise<ProcessedVideo[]> => {
  const config = categoryConfig[category];
  
  if (!config || !config.value) {
    return [];
  }

  if (config.type === 'playlist') {
    return await fetchAllYouTubeVideos(config.value as string);
  } else if (config.type === 'search') {
   
    return await searchYouTubeVideos(config.value as string, CHANNEL_ID);
  } else if (config.type === 'multi-search') {
 
    return await searchMultipleQueries(config.value as string[], CHANNEL_ID);
  } else if (config.type === 'direct-links') {

    return await fetchVideosByDirectLinks(config.value as string[]);
  }

  return [];
};

// ฟังก์ชันฟอร์แมตจำนวนผู้ชม
const formatViewCount = (viewCount: string): string => {
  const count = parseInt(viewCount);
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

// ฟังก์ชันฟอร์แมตวันที่
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return 'วันนี้';
  } else if (diffDays <= 7) {
    return `${diffDays} วันที่ผ่านมา`;
  } else if (diffDays <= 30) {
    return `${Math.ceil(diffDays / 7)} สัปดาห์ที่ผ่านมา`;
  } else if (diffDays <= 365) {
    return `${Math.ceil(diffDays / 30)} เดือนที่ผ่านมา`;
  } else {
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
};

const VideoCarousel: React.FC<{ 
  videos: ProcessedVideo[], 
  categoryKey: string 
}> = ({ videos, categoryKey }) => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: Math.min(5, videos.length),
    slidesToScroll: Math.min(5, videos.length),
    arrows: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(4, videos.length),
          slidesToScroll: Math.min(4, videos.length),
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(3, videos.length),
          slidesToScroll: Math.min(3, videos.length),
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, videos.length),
          slidesToScroll: Math.min(2, videos.length),
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

  if (videos.length === 0) {
    return (
      <div className="no-videos-message">
        <p>ไม่มีวิดีโอใน playlist นี้</p>
      </div>
    );
  }

  return (
    <div className="video-carousel-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <BlogCard 
            key={video.videoId} 
            videoUrl={video.url}
            title={video.title}
            thumbnail={video.thumbnail}
            channelTitle={video.channelTitle}
            viewCount={formatViewCount(video.viewCount)}
            publishedAt={formatDate(video.publishedAt)}
          />
        ))}
      </Slider>
    </div>
  );
};

const BlogCategory: React.FC<{ content: ContentData; index: number }> = ({ content, index }) => {
  const { t } = useLanguage();
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categoryData = categoryConfig[content.title];
  
  // แก้ไขวิธีการดึงข้อมูลหมวดหมู่จาก translation
  const categoryTitle = t(`blog.categories.${content.title}.title`) || content.title;
  const categoryDetail = t(`blog.categories.${content.title}.detail`) || content.detail;
  
  useEffect(() => {
    const loadVideos = async () => {
      if (categoryData && categoryData.value) {
        setLoading(true);
        const fetchedVideos = await fetchVideosByCategory(content.title);
        setVideos(fetchedVideos);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    loadVideos();
  }, [content.title, categoryData]);
  
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

      {categoryData && categoryData.value && (
        <Row className="video-section">
          <Col xs={12}>
            <div className="video-header">
              <Image src={YTIcon} width={60} height={60} className="me-2" />
              <span className="video-label">
                {t('blog.latest')} 
                {(categoryData.type === 'search' || categoryData.type === 'multi-search') && 
                  <span className="search-indicator"> (ค้นหา)</span>
                }
                {categoryData.type === 'direct-links' && 
                  <span className="search-indicator"> (คัดสรร)</span>
                }
              </span>
            </div>
            {loading ? (
              <div className="loading-message">
                <p>กำลังโหลดวิดีโอ...</p>
              </div>
            ) : (
              <VideoCarousel videos={videos} categoryKey={content.title} />
            )}
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
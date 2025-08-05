import React from 'react';
import { Link } from 'react-router';
import './blog-card.css';

interface BlogCardProps {
  videoUrl: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  viewCount: string;
  publishedAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  videoUrl, 
  title, 
  thumbnail, 
  channelTitle, 
  viewCount, 
  publishedAt 
}) => {
  return (
    <div className="blog-card">
      <Link to={videoUrl} target="_blank" className="blog-card-link">
        <div className="video-card-modern">
          <div className="video-thumbnail">
            <img src={thumbnail} alt={title} />
            <div className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="video-info">
            <h4 className="video-title">{title}</h4>
            <div className="video-meta">
              <p className="channel-name">{channelTitle}</p>
              <div className="video-stats">
                <span className="view-count">{viewCount} ครั้ง</span>
                <span className="separator">•</span>
                <span className="publish-date">{publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
import React from 'react';

import { Link } from 'react-router';
import './blog-card.css';

interface BlogCardProps {
  videoUrl: string;
  title: string;
  thumbnail: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ videoUrl, title, thumbnail }) => {
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
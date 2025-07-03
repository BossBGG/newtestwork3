import React from 'react';

import { Link } from 'react-router';
import './recommend-card.css';

interface VideoItem {
  url: string;
  title: string;
  thumbnail: string;
  
}

interface RecommendCardProps {
  video: VideoItem;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ video }) => {
  return (
    <div className="recommend-card">
      <Link to={video.url} target="_blank" className="recommend-card-link">
        <div className="recommend-video-card">
          <div className="recommend-video-thumbnail">
            <img src={video.thumbnail} alt={video.title} />
            <div className="recommend-play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
           
          </div>
          <div className="recommend-video-info">
            <h4 className="recommend-video-title">{video.title}</h4>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendCard;
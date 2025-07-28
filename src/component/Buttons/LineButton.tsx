// src/component/Buttons/LineButton.tsx
import React from 'react';

import './buttons.css';
import Line from '../../assets/images/line.png'

interface LineButtonProps {
  text: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const LineButton: React.FC<LineButtonProps> = ({ 
  text, 
  href, 
  size = 'medium',
  className = '' 
}) => {
  const sizeClass = {
    small: 'line-btn-small',
    medium: 'line-btn-medium', 
    large: 'line-btn-large'
  }[size];

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`line-button-link ${className}`}
    >
      <div className={`line-button ${sizeClass}`}>
        <div className="line-button-content">
          <div className="line-icon">
           <img src={Line} alt="" width="28" height="28" />
          </div>
          <span className="line-button-text">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default LineButton;
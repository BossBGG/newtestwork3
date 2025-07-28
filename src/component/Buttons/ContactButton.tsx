// src/component/Buttons/ContactButton.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import './buttons.css';
import Line from '../../assets/images/line.png'

interface ContactButtonProps {
  text: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  text, 
  href, 
  size = 'medium',
  className = '' 
}) => {
  const sizeClass = {
    small: 'contact-btn-small',
    medium: 'contact-btn-medium', 
    large: 'contact-btn-large'
  }[size];

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`contact-button-link ${className}`}
    >
      <div className={`contact-button ${sizeClass}`}>
        <div className="contact-button-content">
          <div className="contact-icon">
            <img src={Line} alt="" width="24" height="24" />
          </div>
          <span className="contact-button-text">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default ContactButton;
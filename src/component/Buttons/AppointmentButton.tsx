// src/component/Buttons/AppointmentButton.tsx
import React from 'react';

import './buttons.css';
import Calendar from '../../assets/images/calendar-days.png'

interface AppointmentButtonProps {
  text: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ 
  text, 
  href, 
  size = 'medium',
  className = '' 
}) => {
  const sizeClass = {
    small: 'appointment-btn-small',
    medium: 'appointment-btn-medium', 
    large: 'appointment-btn-large'
  }[size];

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`appointment-button-link ${className}`}
    >
      <div className={`appointment-button ${sizeClass}`}>
        <div className="appointment-button-content">
          <div className="appointment-icon">
            <img src={Calendar} alt="" width="20" height="20" />
          </div>
          <span className="appointment-button-text">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default AppointmentButton;
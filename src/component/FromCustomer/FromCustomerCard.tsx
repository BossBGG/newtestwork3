// src/component/FromCustomer/FromCustomerCard.tsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { useLanguage } from '../../i18n/config';
import UserWoman from '../../assets/images/user-woman.png';
import UserMan from '../../assets/images/user-man.png';
import './fromcustomer-card.css';

interface FromCustomerCardProps {
  customerKey: string; // customer1, customer2, customer3
  profileType: 'woman' | 'man'; // ประเภทของรูป profile 
}

const FromCustomerCard: React.FC<FromCustomerCardProps> = ({ customerKey, profileType }) => {
  const { t } = useLanguage();
  
  // เลือกรูป profile ตามประเภท
  const profileImage = profileType === 'woman' ? UserWoman : UserMan;
  
  // ดึงข้อมูลจาก translation
  const customerName = t(`fromcustomer.testimonials.${customerKey}.name`);
  const customerComment = t(`fromcustomer.testimonials.${customerKey}.comment`);

  return (
    <div className="fromcustomer-card">
      <div className="fromcustomer-card-body">
        {/* Profile Section */}
        <div className="fromcustomer-profile">
          <div className="fromcustomer-avatar">
            <img 
              src={profileImage} 
              alt={customerName}
              className="fromcustomer-avatar-img"
            />
          </div>
          <h5 className="fromcustomer-name">{customerName}</h5>
        </div>
        
        {/* Comment Section */}
        <div className="fromcustomer-comment">
          <p className="fromcustomer-comment-text">{customerComment}</p>
        </div>
      </div>
    </div>
  );
};

export default FromCustomerCard;
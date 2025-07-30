// src/utils/ContentDataHelper.ts
import { useLanguage } from '../i18n/config';
import { ContentItems } from '../data/ContentData';

// Helper function สำหรับดึงข้อมูล ContentData ที่แปลแล้ว
export const useTranslatedContentData = () => {
  const { t } = useLanguage();
  
  const getTranslatedContentItems = () => {
    return ContentItems.map(item => {
      const translatedData = t(`contentdata.categories.${item.title}`, 'object') as any;
      
      return {
        ...item,
        title: translatedData.title || item.title,
        detail: translatedData.detail || item.detail,
      };
    });
  };

  const getTranslatedContentItem = (originalTitle: string) => {
    const item = ContentItems.find(item => item.title === originalTitle);
    if (!item) return null;

    const translatedData = t(`contentdata.categories.${item.title}`, 'object') as any;
    
    return {
      ...item,
      title: translatedData.title || item.title,
      detail: translatedData.detail || item.detail,
    };
  };

  return {
    getTranslatedContentItems,
    getTranslatedContentItem
  };
};
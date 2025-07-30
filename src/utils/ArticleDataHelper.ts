// src/utils/ArticleDataHelper.ts
import { useLanguage } from '../i18n/config';
import { ArticleItems } from '../data/ArticleData';

// Helper function สำหรับดึงข้อมูล ArticleData ที่แปลแล้ว
export const useTranslatedArticleData = () => {
  const { t } = useLanguage();
  
  const getTranslatedArticleItems = () => {
    return ArticleItems.map(item => {
      const translatedData = t(`articledata.categories.${item.title}`, 'object') as any;
      
      return {
        ...item,
        title: translatedData.title || item.title,
        detail: translatedData.detail || item.detail,
      };
    });
  };

  const getTranslatedArticleItem = (originalTitle: string) => {
    const item = ArticleItems.find(item => item.title === originalTitle);
    if (!item) return null;

    const translatedData = t(`articledata.categories.${item.title}`, 'object') as any;
    
    return {
      ...item,
      title: translatedData.title || item.title,
      detail: translatedData.detail || item.detail,
    };
  };

  return {
    getTranslatedArticleItems,
    getTranslatedArticleItem
  };
};
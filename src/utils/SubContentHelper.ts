// src/utils/SubContentHelper.ts
import { useLanguage } from '../i18n/config';
import { SubContent } from '../data/ContentData';

// Helper function สำหรับดึงข้อมูล SubContent ที่แปลแล้ว
export const useTranslatedSubContent = () => {
  const { t } = useLanguage();
  
  const getTranslatedSubContent = (category: string, subContentItems: SubContent[]) => {
    return subContentItems.map(item => {
      // ลองหาใน category เฉพาะก่อน (เช่น elbow.path)
      let translationKey = `${category}.${item.path}`;
      let translatedData = t(translationKey, 'object') as any;
      
      // ถ้าไม่พบ ลองหาในรูปแบบเก่า (subcontent.category.path)
      if (!translatedData || Object.keys(translatedData).length === 0) {
        translationKey = `subcontent.${category}.${item.path}`;
        translatedData = t(translationKey, 'object') as any;
      }
      
      return {
        ...item,
        title: translatedData.title || item.title,
        shot: translatedData.shot || item.shot,
        detail: translatedData.detail || item.detail,
      };
    });
  };

  const getTranslatedSubContentItem = (category: string, path: string, subContentItems: SubContent[]) => {
    const item = subContentItems.find(item => item.path === path);
    if (!item) return null;

    // ลองหาใน category เฉพาะก่อน (เช่น elbow.path)
    let translationKey = `${category}.${item.path}`;
    let translatedData = t(translationKey, 'object') as any;
    
    // ถ้าไม่พบ ลองหาในรูปแบบเก่า (subcontent.category.path)
    if (!translatedData || Object.keys(translatedData).length === 0) {
      translationKey = `subcontent.${category}.${item.path}`;
      translatedData = t(translationKey, 'object') as any;
    }
    
    return {
      ...item,
      title: translatedData.title || item.title,
      shot: translatedData.shot || item.shot,
      detail: translatedData.detail || item.detail,
    };
  };

  return {
    getTranslatedSubContent,
    getTranslatedSubContentItem
  };
};
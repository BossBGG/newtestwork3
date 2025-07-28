// src/i18n/config.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { bannerTranslations } from './translations/banner';
import { aboutTranslations } from './translations/about';
import { navbarTranslations } from './translations/navbar';
import { blogTranslations } from './translations/blog';
import { recommendTranslations } from './translations/recommend';
import { fromcustomerTranslations } from './translations/fromcustomer';
import { socialTranslations } from './translations/social';
import { contactusTranslations } from './translations/contactus';

export interface Language {
  code: string;
  name: string;
  flag: string;
  available: boolean;
}

export const languages: Language[] = [
  { code: 'th', name: 'ไทย', flag: '🇹🇭', available: true },
  { code: 'en', name: 'English', flag: '🇺🇸', available: true },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲', available: false }
];

export const defaultLanguage = 'th';

// Helper function สำหรับการรวม translations จากหลายไฟล์
const mergeTranslations = (...translationObjects: any[]) => {
  const merged: Record<string, any> = {};
  
  for (const lang of ['th', 'en', 'my']) {
    merged[lang] = {};
    
    for (const translationObj of translationObjects) {
      if (translationObj[lang]) {
        Object.assign(merged[lang], translationObj[lang]);
      }
    }
  }
  
  return merged;
};

// รวม translations จากทุกไฟล์
const translations = mergeTranslations(
  bannerTranslations,
  aboutTranslations,
  navbarTranslations,
  blogTranslations,
  recommendTranslations,
  fromcustomerTranslations,
  socialTranslations,
  contactusTranslations,
);

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string, returnType?: 'string' | 'object') => any; // เพิ่ม returnType parameter
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  return context;
};

// Safe translation function - แก้ไขให้ทำงานถูกต้อง
const getTranslation = (language: string, key: string, returnType: 'string' | 'object' = 'string'): any => {
  try {
    // Check if language exists
    if (!translations[language]) {
      language = defaultLanguage;
    }

    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Thai
        let fallbackValue: any = translations[defaultLanguage];
        const fallbackKeys = key.split('.');
        
        for (const fk of fallbackKeys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            return returnType === 'object' ? {} : key;
          }
        }
        
        return fallbackValue;
      }
    }
    
    // ถ้าต้องการ object ให้คืนค่า object, ถ้าไม่ใช่ให้คืนค่า string
    if (returnType === 'object') {
      return typeof value === 'object' ? value : {};
    }
    
    return typeof value === 'string' ? value : key;
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error);
    return returnType === 'object' ? {} : key;
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage);

  // Initialize language safely
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
          setCurrentLanguage(savedLanguage);
        }
      }
    } catch (error) {
      console.warn('Error loading saved language:', error);
    }
  }, []);

  const setLanguage = (lang: string): void => {
    try {
      setCurrentLanguage(lang);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang);
      }
    } catch (error) {
      console.warn('Error saving language:', error);
    }
  };

  const t = (key: string, returnType: 'string' | 'object' = 'string'): any => {
    return getTranslation(currentLanguage, key, returnType);
  };

  // Update document language
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = currentLanguage;
      }
    } catch (error) {
      console.warn('Error setting document language:', error);
    }
  }, [currentLanguage]);

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: contextValue },
    children
  );
};
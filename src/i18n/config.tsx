// src/i18n/config.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

// Define translations object
const translations: Record<string, any> = {
  th: {
    banner: {
      title: "ทำอย่างไร ?",
      subtitle: "หากปวดหลัง\nปวดคอ ปวดไหล่\nไม่อยากผ่าตัด",
      subtitle_mobile: "หากปวดหลัง\nปวดคอ ปวดไหล่\nไม่อยากผ่าตัด",
      doctor_name: "หมอเก่ง ผศ.นพ.ธนินนิตย์ ลีรพันธ์",
      description: "แพทย์ผู้เชี่ยวชาญกระดูกและข้อ รักษาอาการปวดหลังได้ โดยไม่ต้องผ่าตัด เชิญปรึกษาเราได้ที่นี่",
      consultation_button: "ปรึกษาปัญหาได้ที่นี่",
      appointment_button: "จองคิวล่วงหน้าได้ใน 7 วัน"
    },
    about: {
      title: "รู้จัก \"หมอเก่ง\"",
      doctor_name: "ผศ.นพ.ธนินนิตย์ ลีรพันธ์",
      specialty: "แพทย์ผู้เชี่ยวชาญ โรคกระดูกและข้อ",
      description: "ปัจจุบันทำงานเป็นอาจารย์ประจำภาควิชาออร์โธปิดิกส์ คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่ มีความเชี่ยวชาญด้านการรักษาโรคกระดูกและข้อที่มีอาการปวดสามารถช่วยเหลือคนไข้ ปวดหลัง ปวดคอ ปวดไหล่ มากกว่า 90% รักษาได้ไม่ผ่าตัด ปวดเป่า การผ่าตัดเปลี่ยนข้อเทียม",
      experience_label: "ประสบการณ์การรักษา",
      experience_value: "มากกว่า 20 ปี",
      patients_label: "รักษาคนไข้ปวดสาเหตุอื่อ ปวดหลัง ปวดคอ",
      patients_value: "มากกว่า 10,000 คน / ปี",
      read_more: "อ่านเพิ่มเติม"
    },
    navbar: {
      home: "หน้าหลัก",
      bone_joint: "กระดูกและข้อ",
      health_knowledge: "ความรู้สุขภาพ",
      video: "Video",
      about_doctor: "รู้จักหมอเก่ง",
      consultation: "ปรึกษา/นัดหมายได้ที่นี่"
    }
  },
  en: {
    banner: {
      title: "What to do?",
      subtitle: "For back pain\nNeck pain, shoulder pain\nWithout surgery",
      subtitle_mobile: "Back pain, neck pain\nshoulder pain\nwithout surgery",
      doctor_name: "Dr. Keng Assoc. Prof. Dr. Taninnit Leerapun",
      description: "Specialist in bone and joint diseases. Treats back pain without surgery. Feel free to consult with us here",
      consultation_button: "Consult here",
      appointment_button: "Make an appointment here"
    },
    about: {
      title: "Meet \"Dr. Keng\"",
      doctor_name: "Assoc. Prof. Dr. Taninnit Leerapun",
      specialty: "Specialist in Bone and Joint Diseases",
      description: "Currently working as a lecturer at the Department of Orthopedics, Faculty of Medicine, Chiang Mai University. Specializes in treating bone and joint diseases with pain symptoms. Can help patients with back pain, neck pain, shoulder pain - more than 90% can be treated without surgery. Specializes in pain management and joint replacement surgery.",
      experience_label: "Treatment Experience",
      experience_value: "More than 20 years",
      patients_label: "Treats patients with various pain conditions, back pain, neck pain",
      patients_value: "More than 10,000 patients / year",
      read_more: "Read More"
    },
    navbar: {
      home: "Home",
      bone_joint: "Bone & Joint",
      health_knowledge: "Health Knowledge",
      video: "Video",
      about_doctor: "About Dr. Keng",
      consultation: "Consultation/Appointment"
    }
  },
  my: {
    banner: {
      title: "ဘာလုပ်ရမလဲ?",
      subtitle: "ကျောနာခြင်း\nလည်ပင်းနာခြင်း၊ ပခုံးနာခြင်း\nခွဲစိတ်မှုမပြုလုပ်ဘဲ",
      subtitle_mobile: "ကျောနာခြင်း\nလည်ပင်းနာ၊ပခုံးနာ\nခွဲစိတ်မှုမပြုလုပ်ဘဲ",
      doctor_name: "ဆရာဝန်ကြီး ပါမောက္ခ ဆရာဝန် သနင်းနစ် လီရပန်",
      description: "အရိုးနှင့်အဆစ်ရောဂါကုသမှု ကျွမ်းကျင်သူ။ ကျောနာမှုကို ခွဲစိတ်မှုမပြုလုပ်ဘဲ ကုသပေးနိုင်သည်။ ဤနေရာတွင် တိုင်ပင်နိုင်ပါသည်",
      consultation_button: "ဤနေရာတွင် တိုင်ပင်နိုင်ပါသည်",
      appointment_button: "ဤနေရာတွင် ချိန်းဆိုနိုင်ပါသည်"
    },
    about: {
      title: "\"ဆရာဝန်ကြီး\" နှင့် မိတ်ဆက်",
      doctor_name: "ပါမောက္ခ ဆရာဝန် သနင်းနစ် လီရပန်",
      specialty: "အရိုးနှင့်အဆစ်ရောဂါ ကျွမ်းကျင်သူ",
      description: "လက်ရှိတွင် ချင်းမိုင်တက္ကသိုလ် ဆေးကျောင်း အရိုးခွဲစိတ်ကုသရေးဌာန၌ တွေ့ဆုံကုသသော ကထိကအဖြစ် တာဝန်ထမ်းဆောင်နေသည်။ နာကျင်မှုရှိသော အရိုးနှင့်အဆစ်ရောဂါများကုသရာတွင် ကျွမ်းကျင်သည်။ ကျောနာ၊ လည်ပင်းနာ၊ ပခုံးနာ ရှိသော လူနာများ၏ ၉၀% ကျော်ကို ခွဲစိတ်မှုမလုပ်ဘဲ ကုသပေးနိုင်သည်။",
      experience_label: "ကုသမှုအတွေ့အကြုံ",
      experience_value: "၂၀ နှစ်ကျော်",
      patients_label: "နာကျင်မှုအမျိုးမျိုး၊ ကျောနာ၊ လည်ပင်းနာ ကုသမှု",
      patients_value: "နှစ်စဉ် လူနာ ၁၀,၀၀၀ ကျော်",
      read_more: "ပိုမိုဖတ်ရှုရန်"
    },
    navbar: {
      home: "မူလစာမျက်နှာ",
      bone_joint: "အရိုးနှင့်အဆစ်",
      health_knowledge: "ကျန်းမာရေးအသိပညာ",
      video: "ဗီဒီယို",
      about_doctor: "ဆရာဝန်ကြီးအကြောင်း",
      consultation: "တိုင်ပင်/ချိန်းဆို"
    }
  }
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
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

// Safe translation function
const getTranslation = (language: string, key: string): string => {
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
            return key; // Return key if no translation found
          }
        }
        
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error);
    return key;
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

  const t = (key: string): string => {
    return getTranslation(currentLanguage, key);
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
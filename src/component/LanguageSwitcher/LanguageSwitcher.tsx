// src/component/LanguageSwitcher/LanguageSwitcher.tsx
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { languages, useLanguage } from '../../i18n/config';
import './language-switcher.css';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang?.available) {
      setLanguage(langCode);
      setIsOpen(false);
    }
  };

  return (
    <Dropdown 
      show={isOpen} 
      onToggle={(isOpen) => setIsOpen(isOpen)}
      className="language-switcher"
    >
      <Dropdown.Toggle 
        variant="outline-primary" 
        id="language-dropdown"
        className="language-toggle"
      >
        <span className="flag">{currentLang.flag}</span>
        <span className="lang-name">{currentLang.name}</span>
        <span className="dropdown-arrow">▼</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="language-menu">
        {languages.map((language) => (
          <Dropdown.Item
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`language-item ${!language.available ? 'disabled' : ''} ${
              currentLanguage === language.code ? 'active' : ''
            }`}
            disabled={!language.available}
          >
            <span className="flag">{language.flag}</span>
            <span className="lang-name">{language.name}</span>
            {!language.available && (
              <span className="coming-soon">(เร็วๆ นี้)</span>
            )}
            {currentLanguage === language.code && (
              <span className="current-indicator">✓</span>
            )}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
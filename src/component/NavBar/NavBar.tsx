// src/component/NavBar/NavBar.tsx
import { Image, Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import Logo from "../../assets/images/logo-banner.png"
import ContactBtn from "../../assets/images/contact-btn.svg"
import DotSelect from "../../assets/images/dot-mark.svg"
import './nav-bar.css'
import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import {ContentItems} from "../../data/ContentData.tsx";
import {ArticleItems} from "../../data/ArticleData.tsx";
import { useLanguage } from '../../i18n/config';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import LineButton from "../Buttons/LineButton.tsx";
import { useTranslatedContentData } from '../../utils/ContentDataHelper';
import { useTranslatedArticleData } from '../../utils/ArticleDataHelper'; 

const NavBarElement = () => {
    const [selectState, setSelectState] = useState(0)
    const location = useLocation()
    const { t } = useLanguage();
    const { getTranslatedContentItems } = useTranslatedContentData(); 
    const { getTranslatedArticleItems } = useTranslatedArticleData();
    
    // ดึงข้อมูลที่แปลแล้ว
    const translatedContentItems = getTranslatedContentItems();
    const translatedArticleItems = getTranslatedArticleItems();
    
    console.log(location.pathname,location.pathname.includes('/content'))
    const isContent = location.pathname.includes('/content')
    const isArticle = location.pathname.includes('/article')
    const isVideo = location.pathname.includes('/video')
    
    
    const getCurrentContentPage = () => {
        if (isContent) {
            const pathParts = location.pathname.split('/content/')[1];
            if (pathParts) {
                
                const mainTitle = pathParts.split('/')[0];
                return decodeURIComponent(mainTitle || '');
            }
        }
        return '';
    };
    
    const getCurrentArticlePage = () => {
        if (isArticle) {
            const pathParts = location.pathname.split('/article/')[1];
            if (pathParts) {
                
                const mainTitle = pathParts.split('/')[0];
                return decodeURIComponent(mainTitle || '');
            }
        }
        return '';
    };
    
    const getCurrentVideoPage = () => {
        if (isVideo) {
            const pathParts = location.pathname.split('/video/')[1];
            if (pathParts) {
                
                const mainTitle = pathParts.split('/')[0];
                return decodeURIComponent(mainTitle || '');
            }
        }
        return '';
    };

    const isMain = (selectState == 0 && location.pathname === '/' && location.hash === '') || 
                   (location.pathname === '/' && location.hash === '')
    const isAbout = selectState == 2 || location.hash.includes('about')
    const isContact = selectState == 3 || location.hash.includes('contact')
    
    // Reset selectState 
    useEffect(() => {
        if (location.pathname === '/' && location.hash === '') {
            setSelectState(0);
        } else if (location.hash.includes('about') || location.hash.includes('contact')) {
            setSelectState(2);
        }
    }, [location]);

    return <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-sticky">
      <Container className="container-fluid">
          <Navbar.Brand href="/" className="navbar-brand-custom">
              <div className="brand-container">
                  <Image src={Logo} className="navbar-logo" />
                  <span className="navbar-brand-text">{t('navbar.logo_text')}</span>
              </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto">
                  <Nav.Link
                      className={"nav-link active align-self-center position-relative"}
                      href="/"
                      onClick={() => setSelectState(0)}
                  >
                      <div className={"position-relative" + (isMain ? ' selected-text' : '')}>
                          {t('navbar.home')}
                          {isMain && <Image className={"dot-focus"} src={DotSelect} width={10} height={10}/>}
                      </div>
                  </Nav.Link>
                  
                  <div className={"position-relative align-self-center "}>
                      <NavDropdown title={t('navbar.bone_joint')} id="basic-nav-dropdown text-black"
                                   className={"" + (isContent ? ' selected-text' : '')}>
                          {
                              // ใช้ข้อมูลที่แปลแล้ว แต่ยังใช้ original title สำหรับ href
                              translatedContentItems.map((item, index) => {
                                  const originalItem = ContentItems[index]; // ดึง original item สำหรับ href
                                  const isActive = getCurrentContentPage() === originalItem.title;
                                  return <NavDropdown.Item 
                                                           href={`/content/${originalItem.title}`} // ใช้ original title
                                                           onClick={() => setSelectState(index)} 
                                                           key={index}
                                                           className={isActive ? 'active-dropdown-item' : ''}
                                                           >{item.title}</NavDropdown.Item> 
                              })
                          }
                      </NavDropdown>
                      {isContent &&
                          <Image className={'dot-focus-drop-down'} src={DotSelect} width={10} height={10}/>}
                  </div>
                  
                  <div className={"position-relative align-self-center "}>
                      <NavDropdown title={t('navbar.health_knowledge')} id="basic-nav-dropdown text-black"
                                   className={"align-self-center " + (isArticle ? ' selected-text' : '')}>
                          {
                              
                              translatedArticleItems.map((item, index) => {
                                  const originalItem = ArticleItems[index]; // ดึง original item สำหรับ href
                                  const isActive = getCurrentArticlePage() === originalItem.title;
                                  return <NavDropdown.Item 
                                                           href={`/article/${originalItem.title}`} // ใช้ original title
                                                           onClick={() => setSelectState(index)} 
                                                           key={index}
                                                           className={isActive ? 'active-dropdown-item' : ''}
                                                           >{item.title}</NavDropdown.Item> 
                              })
                          }
                      </NavDropdown>
                      {isArticle && <Image className={'dot-focus-drop-down'} src={DotSelect} width={10} height={10}/>}
                  </div>
                  
                  <div className={"position-relative align-self-center "}>
                      <NavDropdown title={t('navbar.video')} id="basic-nav-dropdown text-black"
                                   className={"align-self-center " + (isVideo ? ' selected-text' : '')}>
                          {
                             
                              translatedContentItems.map((item, index) => {
                                  const originalItem = ContentItems[index]; 
                                  const isActive = getCurrentVideoPage() === originalItem.title;
                                  return <NavDropdown.Item 
                                                           href={`/video/${originalItem.title}`}
                                                           onClick={() => setSelectState(4)} 
                                                           key={index}
                                                           className={isActive ? 'active-dropdown-item' : ''}
                                                           >{item.title}</NavDropdown.Item>
                              })
                          }
                      </NavDropdown>
                      {isVideo && <Image className={'dot-focus-drop-down'} src={DotSelect} width={10} height={10}/>}
                  </div>
                  
                  <Nav.Link
                      className={"nav-link active align-self-center "}
                      href="/#about-us"
                      onClick={() => setSelectState(2)}
                  >
                      <div className={"position-relative " + ((isContact || isAbout) ? ' selected-text' : '')}>
                      {t('navbar.about_doctor')}
                      {(isContact || isAbout) && <Image className={'dot-focus'} src={DotSelect} width={10} height={10}/>}
                      </div>
                  </Nav.Link>
                  
                  {/* Language Switcher */}
                  <div className="language-switcher d-none d-lg-block ms-3">
                      <LanguageSwitcher />
                  </div>
                  
                  <div>
                  <LineButton
                    text={t("banner.consultation_button")}
                    href="https://lin.ee/EgSMgUU9"
                    size="medium"
                  />
                  </div>
              </Nav>
              
              {/* Mobile Language Switcher */}
              <div className="d-lg-none mt-2">
                  <LanguageSwitcher />
              </div>
          </Navbar.Collapse>
      </Container>
  </Navbar>
}

export default NavBarElement
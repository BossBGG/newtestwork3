import { Image, Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import Logo from "../../assets/images/nav-logo.svg"
import ContactBtn from "../../assets/images/contact-btn.svg"
import DotSelect from "../../assets/images/dot-mark.svg"
import './nav-bar.css'
import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import {ContentItems} from "../../data/ContentData.tsx";
import {ArticleItems} from "../../data/ArticleData.tsx";

const NavBarElement = () => {
    const [selectState, setSelectState] = useState(0)
    const location = useLocation()
    console.log(location.pathname,location.pathname.includes('/content'))
    const isContent = location.pathname.includes('/content')
    const isArticle = location.pathname.includes('/article')
    const isVideo = location.pathname.includes('/video')
    
    // ปรับปรุงการตรวจสอบ active page สำหรับ dropdown items รองรับ sub-path
    const getCurrentContentPage = () => {
        if (isContent) {
            const pathParts = location.pathname.split('/content/')[1];
            if (pathParts) {
                // แยกส่วนแรก (title) จาก sub-path
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
                // แยกส่วนแรก (title) จาก sub-path
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
                // แยกส่วนแรก (title) จาก sub-path
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
          <Navbar.Brand href="/"><Image src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto">
                  <Nav.Link
                      className={"nav-link active align-self-center position-relative"}
                      href="/"
                      onClick={() => setSelectState(0)}
                  >
                      <div className={"position-relative" + (isMain ? ' selected-text' : '')}>
                          หน้าหลัก
                          {isMain && <Image className={"dot-focus"} src={DotSelect} width={10} height={10}/>}
                      </div>
                  </Nav.Link>
                  
                  <div className={"position-relative align-self-center "}>
                      <NavDropdown title="กระดูกและข้อ" id="basic-nav-dropdown text-black"
                                   className={"" + (isContent ? ' selected-text' : '')}>
                          {
                              ContentItems.map((item, index) => {
                                  const isActive = getCurrentContentPage() === item.title;
                                  return <NavDropdown.Item 
                                                           href={`/content/${item.title}`}
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
                      <NavDropdown title="ความรู้สุขภาพ" id="basic-nav-dropdown text-black"
                                   className={"align-self-center " + (isArticle ? ' selected-text' : '')}>
                          {
                              ArticleItems.map((item, index) => {
                                  const isActive = getCurrentArticlePage() === item.title;
                                  return <NavDropdown.Item 
                                                           href={`/article/${item.title}`}
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
                      <NavDropdown title="Video" id="basic-nav-dropdown text-black"
                                   className={"align-self-center " + (isVideo ? ' selected-text' : '')}>
                          {
                              ContentItems.map((item, index) => {
                                  const isActive = getCurrentVideoPage() === item.title;
                                  return <NavDropdown.Item 
                                                           href={`/video/${item.title}`}
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
                      รู้จักหมอเก่ง
                      {(isContact || isAbout) && <Image className={'dot-focus'} src={DotSelect} width={10} height={10}/>}
                      </div>
                  </Nav.Link>
                  
                  <Nav.Link href="https://lin.ee/EgSMgUU9" target={"_blank"} className={"ms-5"}>
                      <Image src={ContactBtn} fluid={true}/>
                  </Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
}

export default NavBarElement
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
    
   
    const isMain = (selectState == 0 && location.pathname === '/' && location.hash === '') || 
                   (location.pathname === '/' && location.hash === '')
    const isAbout = selectState == 2 || location.hash.includes('about')
    const isContact = selectState == 3 || location.hash.includes('contact')
    // const isContent = ContentItems.find(s =>s.title == location.pathname.replace('/',""))
    
    // Reset selectState 
    useEffect(() => {
        if (location.pathname === '/' && location.hash === '') {
            setSelectState(0);
        } else if (location.hash.includes('about') || location.hash.includes('contact')) {
            setSelectState(2);
        }
    }, [location]);

    return <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="container-fluid">
          {/*<Col md={2}>*/}
          {/*    <a className="navbar-brand me-auto md-2 ms-3" href="/">*/}
          {/*        <Image src={Logo}/>*/}
          {/*    </a>*/}
          {/*</Col>*/}
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
                                  return <NavDropdown.Item href={`/content/${item.title}`}
                                                           onClick={() => setSelectState(index)} key={index}>{item.title}</NavDropdown.Item>
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
                                  return <NavDropdown.Item href={`/article/${item.title}`}
                                                           onClick={() => setSelectState(index)} key={index}>{item.title}</NavDropdown.Item>
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
                                  return <NavDropdown.Item href={`/video/${item.title}`}
                                                           onClick={() => setSelectState(4)} key={index}>{item.title}</NavDropdown.Item>
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
              {/*<Col md={8}>*/}
              {/*    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">*/}
              {/*        <ul className={"navbar-nav  mb-2 mb-lg-0"}>*/}
              {/*            <li className="nav-item">*/}
              {/*                <a className={"nav-link active " + (isMain ? 'selected-text' : '')}*/}
              {/*                   aria-current="page" href="/"*/}
              {/*                   onClick={() => setSelectState(0)}>หน้าหลัก</a>*/}
              {/*                {isMain &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*        <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
              {/*        <ul className="navbar-nav  mb-2 mb-lg-0">*/}
              {/*            <li className="nav-item">*/}
              {/*                <NavDropdown title="กระดูกและข้อ" id="basic-nav-dropdown text-black"*/}
              {/*                             className={isContent ? 'selected-text' : ''}>*/}
              {/*                    {*/}
              {/*                        ContentItems.map((item, index) => {*/}
              {/*                            return <NavDropdown.Item href={`/content/${item.title}`}*/}
              {/*                                                     onClick={() => setSelectState(index)}>{item.title}</NavDropdown.Item>*/}
              {/*                        })*/}
              {/*                    }*/}
              {/*                </NavDropdown>*/}
              {/*                {isContent &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*        <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
              {/*        <ul className="navbar-nav  mb-2 mb-lg-0">*/}
              {/*            <li className="nav-item">*/}
              {/*                <NavDropdown title="ความรู้สุขภาพ" id="basic-nav-dropdown text-black"*/}
              {/*                             className={isArticle ? 'selected-text' : ''}>*/}
              {/*                    {*/}
              {/*                        ArticleItems.map((item, index) => {*/}
              {/*                            return <NavDropdown.Item href={`/article/${item.title}`}*/}
              {/*                                                     onClick={() => setSelectState(index)}>{item.title}</NavDropdown.Item>*/}
              {/*                        })*/}
              {/*                    }*/}
              {/*                </NavDropdown>*/}
              {/*                {isArticle &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*        <ul className={"navbar-nav  mb-2 mb-lg-0"}>*/}
              {/*            /!*<li className="nav-item">*!/*/}
              {/*            /!*    <a className={"nav-link active " + (isVideo ? 'selected-text' : '')}*!/*/}
              {/*            /!*       aria-current="page" href="/video"*!/*/}
              {/*            /!*       onClick={() => setSelectState(4)}>Video</a>*!/*/}
              {/*            /!*    {isVideo &&*!/*/}
              {/*            /!*        <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*!/*/}
              {/*            /!*</li>*!/*/}
              {/*            <li className="nav-item">*/}
              {/*                <NavDropdown title="Video" id="basic-nav-dropdown text-black"*/}
              {/*                             className={isVideo ? 'selected-text' : ''}>*/}
              {/*                    {*/}
              {/*                        ContentItems.map((item) => {*/}
              {/*                            return <NavDropdown.Item href={`/video/${item.title}`}*/}
              {/*                                                     onClick={() => setSelectState(4)}>{item.title}</NavDropdown.Item>*/}
              {/*                        })*/}
              {/*                    }*/}
              {/*                </NavDropdown>*/}
              {/*                {isVideo &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*        <ul className="navbar-nav  mb-2 mb-lg-0">*/}
              {/*            <li className="nav-item">*/}
              {/*                <a className={"nav-link active " + (isAbout ? 'selected-text' : '')} aria-current="page"*/}
              {/*                   href={"/#about-us"}*/}
              {/*                   onClick={() => setSelectState(2)}>รู้จักหมอเก่ง</a>*/}
              {/*                {isAbout &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*        <ul className="navbar-nav  mb-2 mb-lg-0">*/}
              {/*            <li className="nav-item">*/}
              {/*                <a className={"nav-link active " + (isContact ? 'selected-text' : '')} aria-current="page"*/}
              {/*                   href={"/#contact-us"} onClick={() => setSelectState(3)}>ติดต่อเรา</a>*/}
              {/*                {isContact &&*/}
              {/*                    <Image className={'position-absolute'} src={DotSelect} width={10} height={10}/>}*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*    </div>*/}
              {/*</Col>*/}
              {/*<Col md={2} className={'pe-2'}>*/}
              {/*    <Link to={'https://lin.ee/EgSMgUU9'} target={'_blank'}>*/}
              {/*        <button className="nav-btn"><Image src={ContactBtn} fluid={true}/></button>*/}
              {/*    </Link>*/}
              {/*    /!*<Button></Button>*!/*/}
              {/*</Col>*/}

      </Container>
  </Navbar>
}

export default NavBarElement
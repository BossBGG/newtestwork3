/* ContentPage.tsx */

import {ContentItems, SubContent} from "../../data/ContentData.tsx";
import './content.css'
import {Card, CardBody, CardHeader, CardText, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useLocation, useParams} from "react-router";
import {ArticleItems} from "../../data/ArticleData.tsx";
import { useTranslatedContentData } from '../../utils/ContentDataHelper'; // เพิ่ม import
import { useTranslatedSubContent } from '../../utils/SubContentHelper'; // เพิ่ม import

const SubCardRender = (item: SubContent, section: string, page: string) => {
    return (
        <Col md={4} className={'no-underline'}>
            <Link to={`/${section}/${page}/${item.path}`}>
                <Card className={'sub-card'}>
                    <CardHeader>
                        <text className="header-text">{item.title}</text>
                    </CardHeader>
                    <CardBody>
                        <CardText>{item.shot}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}

const ContentPage = () => {
    let location = useLocation();
    let params = useParams();
    const page = params.page;
    const sub = params.sub;
    const path = location.pathname?.includes('content')? 'content':'article'
    const dataSource = location.pathname?.includes('content')?ContentItems:ArticleItems;
    const { getTranslatedContentItem } = useTranslatedContentData(); // เพิ่มการใช้ helper
    const { getTranslatedSubContent, getTranslatedSubContentItem } = useTranslatedSubContent(); // เพิ่มการใช้ helper
    
    // หาข้อมูลจาก original data
    const originalContent = dataSource.find(s => s.title === page);
    
    // ดึงข้อมูลที่แปลแล้ว (เฉพาะสำหรับ ContentItems)
    const translatedContent = location.pathname?.includes('content') && originalContent
      ? getTranslatedContentItem(originalContent.title)
      : originalContent;
    
    const content = translatedContent || originalContent;
    
    // แปล SubContent ถ้ามี
    const translatedSubContentItems = content?.subContent 
      ? getTranslatedSubContent(getCategoryKey(originalContent?.title || ''), content.subContent)
      : content?.subContent;
      
    const subContent = sub && translatedSubContentItems
      ? getTranslatedSubContentItem(getCategoryKey(originalContent?.title || ''), sub, content?.subContent || [])
      : translatedSubContentItems?.find(s => s.path === sub);
    
    // Helper function เพื่อแปลง title เป็น category key
    function getCategoryKey(title: string): string {
      const categoryMap: { [key: string]: string } = {
        'ปวดไหล่': 'shoulder',
        'ปวดหลัง': 'back', 
        'ปวดเข่า': 'knee',
        'ปวดคอ': 'neck',
        'ปวดเท้าและข้อเท้า': 'ankle',
        'ปวดข้อมือ': 'wrist',
        'กระดูกพรุน': 'bone',
        'ปวดข้อศอก': 'elbow',
        'ปวดสะโพก': 'hip',
        'เกาต์': 'gout',
        'โรคมือชา': 'hand',
        'ข้อเข่าเทียม': 'arthroplasty',
        'กายภาพบำบัด': 'therapy'
      };
      return categoryMap[title] || title.toLowerCase();
    }
    
    console.log(subContent);
    return (
        <Container className={'App pb-0 mb-0'}>
            {/* เปลี่ยนจาก p-5 เป็น px-5 py-2 หรือ py-3 */}
            {subContent && <Row><div className={'px-5 py-2 text-start'} dangerouslySetInnerHTML={{__html: subContent.detail}}></div></Row>}
            {/*{subContent && <Row>{subContent.detail}</Row>}*/}
            {!subContent && <Row className={'p-3 p-md-0 category-row'}>
                <Col xs={12} md={content?.detail ? 3 : 6} className={'text-center mb-3 mb-md-0'}>
                    <Image src={content?.image} width={200} fluid={true} className={'category-image'}/>
                </Col>
                <Col xs={12} md={content?.detail ? 3 : 6} className={'text-center text-md-start mb-3 mb-md-0'}>
                    <h1 className={'category-title'}>{content?.title}</h1>
                </Col>
                {content?.detail&&
                    <Col xs={12} md={6} className={'text-center text-md-start '}>
                        <p className={'category-detail'}>{content?.detail}</p>
                    </Col>
                }
            </Row>}
            {!subContent && <Row className={' mt-4 mb-4'}>
                {translatedSubContentItems?.map((item, index) => {
                    return (SubCardRender(item, path, originalContent?.title || ''));
                })}
            </Row>}
        </Container>
    )
}

export default ContentPage;
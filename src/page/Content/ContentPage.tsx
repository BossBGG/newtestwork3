import {ContentItems, SubContent} from "../../data/ContentData.tsx";
import './content.css'
import {Card, CardBody, CardHeader, CardText, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useLocation, useParams} from "react-router";
import {ArticleItems} from "../../data/ArticleData.tsx";


const SubCardRender = (item: SubContent,section:string,page:string) => {
    return (
        <Col md={4} className={'no-underline'}>
            <Link to={`/${section}/${page}/${item.path}`}>
                <Card className={'sub-card'}>
                    <CardHeader>
                        {/*{item.title}*/}
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
    const content = dataSource.find(s => s.title === page);
    const subContent = content?.subContent?.find(s => s.path === sub);
    console.log(subContent);
    return (
        <Container className={'App pb-0 mb-0'}>
            {subContent && <Row><div className={'p-5 text-start'} dangerouslySetInnerHTML={{__html: subContent.detail}}></div></Row>}
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
                {content?.subContent?.map((item) => {
                    // return ()
                    return (SubCardRender(item,path,content.title));
                })}
            </Row>}
        </Container>
    )
}

export default ContentPage;
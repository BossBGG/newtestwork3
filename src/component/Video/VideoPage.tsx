import {ContentItems} from "../../data/ContentData.tsx";
import './video.css'
import {Card, CardBody, CardHeader, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {YoutubeData} from "../../page/MainPage.tsx";
import { VideoItem} from "../../model/YoutubeModel.tsx";

const apiUrl = import.meta.env.VITE_API_URL;
const VideoRender = (video: VideoItem) => {
    return (
        <Col md={4} className={'no-underline'}>
            <Link to={'https://www.youtube.com/watch?v=' + video.contentDetails.videoId} target={'_blank'}>
                <Card className={'video-card'}>
                    <CardHeader>
                        {/*{item.title}*/}
                        <text className="header-text">{video.snippet.title}</text>
                    </CardHeader>
                    <CardBody>
                        <Card.Img src={video.snippet.thumbnails?.standard?.url??video.snippet.thumbnails?.default?.url}/>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}
const VideoPage = () => {
    // const content = ArticleItems.find(s => s.title === "Video");

    const [playlistData,setPlaylistData] = useState<YoutubeData>();
    const location = useLocation();

    console.log(location);
    const getPlaylist = async () =>{
        const response = await axios.get(apiUrl + '/api/get-list')
        if(response.status){
            setPlaylistData(response.data.data)
        }

    }

    useEffect(() => {
        getPlaylist()
    }, []);

    let params = useParams();
    const page = params.page;
    const content = ContentItems.find(s => s.title === page);
    const filteredPL = playlistData?.playlists.items.filter(s => s.snippet.title.includes(content?.filter??''))
    const psIds = filteredPL?.map(p => p.id)
    const videos = playlistData?.videos.filter(v => psIds?.includes(v.id));

    console.log('filteredPL',filteredPL)
    console.log('psIds',psIds)
    console.log('videos',videos)
    return (
        <Container className={'App pb-0 mb-0'}>
            <Row className={'p-0 category-row'}>
                <Col xs={content?.detail?3:6}>
                    <Image src={content?.image} width={200} fluid={true}/>
                </Col>
                <Col xs={content?.detail?3:6}>
                    <h1 className={'text-center text-md-start'}>{content?.title}</h1>
                </Col>
                {content?.detail&&
                    <Col xs={6}>
                        <p>{content?.detail}</p>
                    </Col>
                }
            </Row>
            <Row className={' mt-4 mb-4'}>
                {/*{content?.subContent?.map((item) => {*/}
                {/*    // return ()*/}
                {/*    return (SubCardRender(item,content.title));*/}
                {/*})}*/}
                {
                    videos?.flatMap(video =>{
                        return video.data.items.filter(i => i.contentDetails.videoPublishedAt).map(v =>{
                            return VideoRender(v)
                        })
                    })
                }
            </Row>
        </Container>
    )
}

export default VideoPage;
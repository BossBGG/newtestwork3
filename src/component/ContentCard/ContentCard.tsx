import { Card, Col, Image, Row } from "react-bootstrap";
import "./content-card.css"
import YTIcon from '../../assets/images/yt-icon.png'
import ArrowLeft from '../../assets/images/content/arrow-left.svg'
import ArrowRight from '../../assets/images/content/arrow-right.svg'
// import {Slide} from "react-slideshow-image";
import Slider from "react-slick";
import {PlayLists, VideoItem, Videos} from "../../model/YoutubeModel.tsx";
import { Link } from "react-router";
import moment, {Moment} from 'moment';
import { dateTimePass } from "../../utils/TimeUtils.ts";
import { useMemo } from "react";
import {ContentData, ContentItems} from "../../data/ContentData.tsx";

export interface Prop {
    playlist: PlayLists,
    videoList:Videos[]
}

interface SortedContent {
    content: ContentData,
    videos: Videos[],
    date: Moment | null
}

const RenderCard = (content: ContentData, videos: Videos[], index: number) => {
    // @ts-ignore
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
            <div style={{top:30,right:-45,height:90,width:90,position:'absolute',zIndex:50,cursor:'pointer'}}>
                <Image src={ArrowRight} fluid={true} onClick={onClick}/>
            </div>
        );
    }

    // @ts-ignore
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div style={{
                top: 30,
                left: -40,
                height: 90,
                width: 90,
                position: 'absolute',
                zIndex: 50,
                cursor: 'pointer'
            }}>
                <Image src={ArrowLeft} fluid={true} onClick={onClick}/>
            </div>
        );
    }

    const settings = useMemo(() => {
        return {
            // className: "center",
            // centerMode: true,
            infinite: false,
            centerPadding: "60px",
            // slidesToShow: show,
            // speed: 300,
            swipeToSlide: true,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        };
        // beforeChange: function(currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function(currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    }, []);


    const filteredVideos = useMemo(() => {
        const allVideos = videos?.flatMap(v => v.data?.items ?? []) ?? []
        allVideos.sort((a: VideoItem, b: VideoItem) => moment(a.snippet.publishedAt).isBefore(b.snippet.publishedAt) ? 1 : -1)
        // console.log(allVideos.length)
        return allVideos ? allVideos.filter(s => s.snippet.thumbnails?.default?.url) : undefined
    }, [videos]);

    return (
        <Card className={'content-container'} id={`content-${index}`}>
            {/*<Card.Header>*/}

            {/*</Card.Header>*/}
            <Card.Body>
                <Row>
                    <Col md={4} className={'center'}>
                        <Image src={content.image} width={200} fluid={true}/>
                    </Col>
                    <Col md={8}>
                        <Card.Header className={'text-center text-md-start'}>{content.title}</Card.Header>
                        <Card.Text>{content.detail}</Card.Text>
                    </Col>
                </Row>
                <Row className={'text-start'}>
                    <Col md={2}>
                        <Image src={YTIcon} width={50} height={50} fluid={true}/>
                        <span>ล่าสุด</span>
                    </Col>
                </Row>
                <div className={'center'} >
                    <div className={'slider-container'}>
                        <Slider {...settings}>
                            {
                              filteredVideos && filteredVideos.map((video: VideoItem) => {
                                  return <div className={'image-slide'}>
                                      <Link to={'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId} target={'_blank'}>
                                          <Card.Img className={'mb-1'}
                                                    src={video.snippet.thumbnails?.default?.url} />
                                          <Row className={'mb-1'}>
                                              <text className={'image-detail'}>{video.snippet.title}</text>
                                          </Row>
                                          <Row className={'mb-1'}>
                                              <text
                                                className={'image-sub-detail'}>{video.snippet.channelTitle}</text>
                                          </Row>
                                          <Row className={'mb-1'}>
                                              <text
                                                // className={'image-sub-date'}>{dateTimePass(video.contentDetails.videoPublishedAt)}</text>
                                                className={'image-sub-date'}>{dateTimePass(video.snippet.publishedAt)}</text>
                                          </Row>
                                      </Link>
                                  </div>
                              })
                            }
                        </Slider>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
const sortedId = (content: ContentData[], playlist: PlayLists, videoList: Videos[]) => {
    const sortedContent: SortedContent[] = []
    content.forEach((item) => {
        const filteredPL = playlist.items.filter(s => s.snippet.title.includes(item.filter))
        const psIds = filteredPL.map(p => p.id)
        const videos = videoList.filter(v => psIds.includes(v.id));
        videos.forEach(video => {
            let lasted: Moment | null = null;
            video.data.items.forEach(v => {
                if (!lasted) {
                    lasted = moment(v.snippet.publishedAt)
                } else if (lasted.isBefore(moment(v.snippet.publishedAt))) {
                    lasted = moment(v.snippet.publishedAt)
                }
            })
            sortedContent.push({content: item, videos: videos, date: lasted})
        })
    })
    sortedContent.sort((a, b) => moment(a.date).isBefore(b.date) ? 1 : -1)
    return sortedContent
}
const ContentCard = ({playlist, videoList = []}: Prop) => {
    const items = sortedId(ContentItems, playlist, videoList);
    console.log(items)
    return <Row>
        <Col md={1}/>
        <Col md={10}>
        {
            items.map((d, index) => {
                return RenderCard(d.content, d.videos, index)
                })
            }
        </Col>
    </Row>
}

export default ContentCard
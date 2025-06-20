export interface PlayLists{
    kind: string;
    etag: string;
    nextPageToken: string;
    prevPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number
    };
    items: PlayListItem[]
}

export interface PlayListItem{
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default:{
                url: string;
                width: number;
                height: number
            },
            standard:{
                url: string;
                width: number;
                height: number
            },
        };
        channelTitle: string;
        defaultLanguage: string;
        localized: {
            title: string;
            description: string
        }
    };
    contentDetails: {
        itemCount:  number
    };
    status: {
        privacyStatus: string;
        podcastStatus: string
    };
    player: {
        embedHtml: string
    }
}

export interface Videos{
    id:string,
    data:VideoData
}

export interface VideoData{
    kind: string;
    etag: string;
    nextPageToken: string;
    prevPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number
    };
    items: VideoItem[]
}


export interface VideoItem{
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
                default:{
                    url: string;
                    width: number;
                    height: number
                },
                standard:{
                    url: string;
                    width: number;
                    height: number
                },
        };
        channelTitle: string;
        videoOwnerChannelTitle: string;
        videoOwnerChannelId: string;
        playlistId: string;
        position: number;
        resourceId: {
            kind: string;
            videoId: string;
        }
    };
    contentDetails: {
        videoId: string;
        startAt: string;
        endAt: string;
        note: string;
        videoPublishedAt: string
    };
    status: {
        privacyStatus: string
    }
}
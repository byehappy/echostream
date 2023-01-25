export interface states{
    status: string,
    channel: object[],
    srcIframe:string,
    games:game[],

    bratishkinoff: stream[],
    koreshzy: stream[],
    frametamer666: stream[],
    jesusavgn: stream[],
    buster: stream[]
}

export  interface stream{
    id: string;
    login: string;
    display_name: string;
    description: string;
    profile_image_url: string;

}
export interface resInf{
    data: stream;
}

export const SourceActionType = {
    setSource: 'Streams_Fetching_Success'
}

export interface game{
    id:string,
    name:string,
    box_art_url:string,
}
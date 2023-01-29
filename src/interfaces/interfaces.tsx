export interface states{
    status: string,
    channels: channels[],
    srcIframe:string,
    games:game[],

    bratishkinoff: stream[],
    koreshzy: stream[],
    frametamer666: stream[],
    jesusavgn: stream[],
    razdva: stream[]
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
export interface resContextGames{
    data: game[]
}
export interface resContextSteamers{
    bratishkinoff: stream[],
    koreshzy: stream[],
    frametamer666: stream[],
    jesusavgn: stream[],
    razdva: stream[]
}
export interface channels{
    id: string;
    user_name:string;
    game_name:string;
    type:string;
    tittle:string;
    thumbnail_url:string;
}
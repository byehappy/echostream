import {channels, stream} from "../interfaces/interfaces";

export const streamFetching = () =>{
    return{
        type: 'Stream_Fetching_Loading'
    }
}
export const streamFetchingError = () =>{
    return{
        type: 'Stream_Fetching_Error'
    }
}

export const streamFetchingSuccess = (channel: any,pagination:any) =>{
    return{
        type: 'Stream_Fetching_Success',
        channel:channel,
        pagination:pagination
    }
}

export const streamsFetchingSuccess = (login: string,stream: stream) =>{
    return{
        type: 'Streams_Fetching_Success',
        payload:{login:login,stream:stream}
    }
}
export const SwitchIframe = (srcIframe:string)=>{
    return{
        type: 'Switch_Iframe',
        payload:srcIframe
    }
}
export const PictureStreamer = (image_url :any)=>{
    return{
        type:'Picture_Streamer',
        payload:image_url
    }
}
import {useHttp} from "../hooks/http.hook";
import {channels} from "../interfaces/interfaces";

const MainService = () => {
    const {request} = useHttp();

    const _baseURL = 'https://api.twitch.tv/helix/'

    const getStreamer = async (login: string | undefined) => {
        return (
            await request(`${_baseURL}users?login=${login}`)
        )
    }
    const getGames = async () => {
        return (
            await request(`${_baseURL}games/top`)
        )
    }
    const getStreamers = async (gameId: string | undefined) => {

        const res = await request(`${_baseURL}streams?game_id=${gameId}&language=ru`)
        return res.data.map(_transformChannel)
    }
    const _transformChannel = (channel: any) => {
        return {
            id: channel.id,
            user_name: channel.user_name,
            game_name: channel.game_name,
            type: channel.type,
            tittle: channel.tittle,
            thumbnail_url: channel.thumbnail_url.replace('{width}', '400').replace('{height}', '300')
        }
    }

    return {getStreamer, getGames, getStreamers}
}


export default MainService;
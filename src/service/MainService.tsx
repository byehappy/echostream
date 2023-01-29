import {useHttp} from "../hooks/http.hook";

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
    const getStreamers = async (gameId: string | undefined,pagination:string | null = '') => {

        const res = await request(`${_baseURL}streams?game_id=${gameId}&language=ru&first=25&after=${pagination}`);
        const secondRes:object = await res.data.map((item:any) => request(`${_baseURL}users?login=${item.user_login}`))
        return {data:res.data.map(_transformChannel),pagination:res.pagination.cursor}
    }
    const _transformChannel = (channel: any) => {
        return {
            id: channel.id,
            user_name: channel.user_name,
            user_login: channel.user_login,
            game_name: channel.game_name,
            type: channel.type,
            title: channel.title,
            thumbnail_url: channel.thumbnail_url.replace('{width}', '640').replace('{height}', '320')
        }
    }

    return {getStreamer, getGames, getStreamers}
}


export default MainService;
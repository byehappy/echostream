import {useHttp} from "../hooks/http.hook";

const MainService = () => {
    const {request} = useHttp();

    const _baseURL = 'https://api.twitch.tv/helix/'

    const getStreamer = async(login: string | undefined) => {
        return (
            await request(`${_baseURL}users?login=${login}`)
        )
    }
    const getGames = async(name: string | undefined) => {
        return (
            await request(`${_baseURL}games?name=${name}`)
        )
    }

    return {getStreamer,getGames}
}


export default MainService;
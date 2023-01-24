import {useHttp} from "../hooks/http.hook";

const MainService = () => {
    const {request} = useHttp();

    const _baseURL = 'https://api.twitch.tv/helix/'

    const getStreamer = async(login: string | undefined) => {
        return (
            await request(`${_baseURL}users?login=${login}`)
        )
    }

    return {getStreamer}
}


export default MainService;
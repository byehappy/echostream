import {createContext, useCallback, useEffect} from "react";
import {resContextSteamers, stream} from "../../interfaces/interfaces";
import {streamsFetchingSuccess} from "../../actions";
import {useDispatch} from "react-redux";
import MainService from "../../service/MainService";

let inputChannel = {
    bratishkinoff: [],
    koreshzy: [],
    frametamer666: [],
    jesusavgn: [],
    razdva: []
}

export const MainStreamerContext = createContext<resContextSteamers>(inputChannel)

function StreamersContext(props: any) {
    const dispatch = useDispatch()
    const {getStreamer} = MainService();
    const arrChannel = ['bratishkinoff', 'koreshzy', 'frametamer666', 'jesusavgn', 'razdva'];
    const takeInf = useCallback(() => {
        arrChannel.forEach((item) => {
            getStreamer(item)
                .then(res => res.data.forEach((item: stream) => {
                    dispatch(streamsFetchingSuccess(item.login, item))
                }))
        })
    }, [])

    useEffect(() => {
        takeInf();
    }, [])
    return (
        <MainStreamerContext.Provider value={inputChannel}>
            {props.children}
        </MainStreamerContext.Provider>
    )
}
export default StreamersContext;
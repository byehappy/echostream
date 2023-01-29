import {createContext, useCallback, useEffect} from "react";
import {game, resContextGames} from "../../interfaces/interfaces";
import {useDispatch} from "react-redux";
import mainService from "../../service/MainService";
import {gameFetchingSuccessful} from "../../actions/GamesAction";

let inputInfo = {
    data:[]
}

export const GamesContext = createContext<resContextGames>(inputInfo)

function GameCardContext(props:any){
    const dispatch = useDispatch();
    const {getGames} = mainService();

    const takeGame = useCallback(()=>{
            getGames()
                .then(res => {
                    return res.data.forEach((item: game) => {
                        item.box_art_url = item.box_art_url.replace('{width}', '180').replace('{height}', '270')
                        dispatch(gameFetchingSuccessful(item))
                    });
                })
    }, [])

    useEffect(()=>{
        takeGame()
    },[])
    return(
        <GamesContext.Provider value={inputInfo}>
            {props.children}
        </GamesContext.Provider>
    )
}
export default  GameCardContext;
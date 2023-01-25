import {Container} from "./GamesCatalog.style";
import {useDispatch, useSelector} from "react-redux";
import mainService from "../../service/MainService";
import {useCallback, useEffect} from "react";
import {game} from "../../interfaces/interfaces";
import {gameFetchingSuccessful} from "../../actions/GamesAction";
import GamesItem from "../gamesItem/GamesItem";

const GamesCatalog = () =>{
    const dispatch = useDispatch();
    const {getGames} = mainService();
    const {status,games}:any = useSelector(state => state);
    const arrGames=['Just%20Chatting','Dota%202','Counter-Strike%3A%20Global%20Offensive','Minecraft','Grand%20Theft%20Auto%20V']
    function renderItems (arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                <GamesItem key={id} {...props}/>
            )
        })
    }
    const takeGame = useCallback(()=>{
        arrGames.forEach((item)=>{
            getGames(item)
                .then(res => res.data.forEach((item:game)=>{
                    item.box_art_url = item.box_art_url.replace('{width}','350').replace('{height}','350')
                    dispatch(gameFetchingSuccessful(item))
                }))
        })
    }, [])
    useEffect(()=>{
        takeGame()
    },[])
    const elements = renderItems(games)

    return(
        <Container>
            {elements}
        </Container>
    )
}

export default GamesCatalog;
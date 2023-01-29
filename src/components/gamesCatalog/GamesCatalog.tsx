import {Container} from "./GamesCatalog.style";
import {useSelector} from "react-redux";
import GamesItem from "../gamesItem/GamesItem";

const GamesCatalog = () =>{
    const {status,games,pagination}:any = useSelector(state => state);
    function renderItems (arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                <GamesItem key={id} {...props}/>
            )
        })
    }


    const elements = renderItems(games)

    return(
        <Container>
            {elements}
        </Container>
    )

}

export default GamesCatalog;
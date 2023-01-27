import {Container} from "./GamesItem.style";

const GamesItem = ({name,box_art_url,id}:any) =>{

    return(
        <Container to={`/game/${id}`}>
            <img src={box_art_url}/>
            <h2>{name}</h2>
        </Container>
    )
}

export default GamesItem;
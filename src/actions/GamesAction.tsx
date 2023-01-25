import { game } from "../interfaces/interfaces";

export const gameFetching= () =>{
    return{
        type:'Game_Fetching_Loading'
    }
}

export const gameFetchingError = () =>{
    return{
        type: 'Game_Fetching_Error'
    }
}

export const gameFetchingSuccessful = (game: game) =>{
    return{
        type: 'Games_Fetching_Success',
        game:game
    }
}

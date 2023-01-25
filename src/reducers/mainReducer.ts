import {SourceActionType, states} from "../interfaces/interfaces";


const initialState: states = {
    status: "loading",
    channel: [],
    srcIframe:'bratishkinoff',
    games: [],

    bratishkinoff: [],
    koreshzy: [],
    frametamer666: [],
    jesusavgn: [],
    buster: []
}

function mainReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'Stream_Fetching_Loading':
            return {
                ...state,
                status: 'loading'
            }
        case 'Stream_Fetching_Error':
            return {
                ...state,
                status: 'error'
            }
        case 'Stream_Fetching_Success':
            return {
                ...state,
                channel: action.payload,
                status: 'idle'
            }
        case SourceActionType.setSource: {
            const { login, stream } = action.payload;
            return {
                ...state,
                [login]: stream,
                status: 'idle'
            };
        }
        case 'Switch_Iframe':
            return {
                ...state,
                srcIframe: action.payload,
                status: 'idle'
            }
        case 'Game_Fetching_Loading':
            return {
                ...state,
                status: 'loading'
            }
        case 'Game_Fetching_Error':
            return{
                ...state,
                status:'error'
            }
        case 'Games_Fetching_Success':
            return{
                ...state,
                games: [...state.games,action.game],
                status: 'idle'
            }
        default:
            return state;
    }
}

export default mainReducer;

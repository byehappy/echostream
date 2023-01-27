import React, {useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MainService from "../../service/MainService";
import {channels} from "../../interfaces/interfaces";
import {streamFetchingSuccess} from "../../actions";
import StreamersItem from "../streamersItem/StreamersItem";
import {Container} from "./StreamersList.style";

const StreamersList= () => {
    const {getStreamers} = MainService();
    const {gameId} =useParams()
    const dispatch = useDispatch()
    const {status,channels}:any = useSelector(state => state)
    const takeStream = useCallback(()=>{
        getStreamers(gameId)
            .then(data=> dispatch(streamFetchingSuccess(data)))
    }, [])


    useEffect(() => {
        takeStream();
    }, [gameId])
function renderItems (arr: object[]){
        return arr.map(({...props},id)=>{
            return(
                <StreamersItem key={id} {...props}/>
            )
        })
}

    const elements = renderItems(channels)
    return (
        <Container >
            {elements}
        </Container>
    )
}

export default StreamersList;

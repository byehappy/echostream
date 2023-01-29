import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MainService from "../../service/MainService";
import { streamFetchingSuccess} from "../../actions";
import StreamersItem from "../streamersItem/StreamersItem";
import {Container} from "./StreamersList.style";
import SkeletonList from "./SkeletonList";


const StreamersList = () => {
    const {getStreamers} = MainService();
    const {gameId} = useParams()
    const dispatch = useDispatch()
    const {status, channels, pagination}: any = useSelector(state => state)
    const [pagin, setPagin] = useState()
    const [isLoading, setLoading] = useState(true)
    const takeStream = async () => {
        await getStreamers(gameId, pagin).then(data => {
            dispatch(streamFetchingSuccess([...channels, ...data.data], data.pagination))
            setPagin(data.pagination)
            setLoading(false)
        })
    }

    const infinityScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight - 300) {
            takeStream().then()
            window.removeEventListener('scroll', infinityScroll)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', infinityScroll)
        //setloadingnew(false)
    }, [pagin])

    useEffect(() => {
        takeStream().then();
        return () => {
            window.removeEventListener('scroll', infinityScroll)
            dispatch(streamFetchingSuccess([], ' '))
        }
    }, [])

    function renderItems(arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                <StreamersItem key={id} {...props}/>
            )
        })
    }

    const elements = renderItems(channels)
    // @ts-ignore
    return (
        <Container>
            {isLoading && <p>Loading...</p> && <SkeletonList cards={9}/>}
            {elements}
        </Container>
    )
}

export default StreamersList;

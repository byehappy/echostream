import {ChannelList, Container, Player} from './MainPlayer.style';
import PlayerItem from "../playerItem/PlayerItem";
import {useDispatch, useSelector} from "react-redux";
import MainService from '../../service/MainService';
import {stream} from "../../interfaces/interfaces";
import {streamsFetchingSuccess} from '../../actions';
import {useCallback, useEffect,} from "react";


const MainPlayer = () =>{
    const dispatch = useDispatch()
    const {getStreamer} = MainService();
    const {srcIframe,status,bratishkinoff, koreshzy, frametamer666, jesusavgn, buster}: any = useSelector(state => state);
    const arrChannel = ['bratishkinoff', 'koreshzy', 'frametamer666', 'jesusavgn', 'buster'];
    function renderItems (arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                    <PlayerItem key={id} {...props}/>
            )
        })
    }
    const takeInf = useCallback(()=>{
        arrChannel.forEach((item)=>{
            getStreamer(item)
                .then(res => res.data.forEach((item:stream) =>{
                    dispatch(streamsFetchingSuccess(item.login,item))
                }))
        })
    }, [])

useEffect(()=>{
    takeInf();
}, [])

    const elements = renderItems([bratishkinoff, koreshzy, frametamer666, jesusavgn, buster])

    let link:string = `https://player.twitch.tv/?channel=${srcIframe}&parent=streamernews.example.com`
    return(
        <Container>
            <Player src={link} name={'iframe'} frameBorder='0'/>
            <ChannelList>
                {elements}
            </ChannelList>
        </Container>
    )
}
export default MainPlayer;
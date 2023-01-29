import {ChannelList, Container, Player} from './MainPlayer.style';
import PlayerItem from "../playerItem/PlayerItem";
import {useSelector} from "react-redux";


const MainPlayer = () =>{
    const {srcIframe,status,bratishkinoff, koreshzy, frametamer666, jesusavgn, razdva}: any = useSelector(state => state);
    function renderItems (arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                    <PlayerItem key={id} {...props}/>
            )
        })
    }

    const elements = renderItems([bratishkinoff, koreshzy, frametamer666, jesusavgn, razdva])

    let link:string = `https://player.twitch.tv/?channel=${srcIframe}&parent=streamernews.example.com`
    return(
        <Container>
            <Player src={link} name={'iframe'} frameBorder='0' allowFullScreen={true}/>
            <ChannelList>
                {elements}
            </ChannelList>
        </Container>
    )
}
export default MainPlayer;
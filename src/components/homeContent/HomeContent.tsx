import {Container, ContainerItem} from './HomeContent.style';
import Pepe from 'resources/img/Pepe.png'

const HomeContent = () => {
    return (
        <Container>
            <ContainerItem>
            Look the another streamers in Ru segment
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</h4>
            </ContainerItem>
            <img src={Pepe}/>
        </Container>
    )
}

export default HomeContent;
import {Container, ContainerItem, ContainerPlace, Links, Logo} from './Header.style';

const Header = () => {
    return (
        <div style={{borderBottom: '1px solid #717171', width: '100%'}}>
            <Container>
                <Logo>
                    EchoStream
                </Logo>
                <ContainerPlace>
                    <ContainerItem>
                        <Links to='/'>
                            Home
                        </Links>
                    </ContainerItem>

                    <ContainerItem>
                        <Links to='/catalog'>
                            Catalog
                        </Links>
                    </ContainerItem>

                    <ContainerItem>
                        <Links to='/about-us'>
                            About us
                        </Links>
                    </ContainerItem>

                    <ContainerItem>
                        <Links to='/see-later'>
                            See later
                        </Links>
                    </ContainerItem>

                </ContainerPlace>
            </Container>
        </div>
    )
}

export default Header;

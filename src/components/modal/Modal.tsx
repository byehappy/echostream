import {createPortal} from "react-dom";
import React, {useEffect, useMemo, useRef} from "react";
import {Container, ContainerItem, Player} from "./Modal.style";

const modalRootElement: any = document.querySelector('#portal')

const Modal = (props: any) => {
    const {login, open, onClose} = props;
    const elemnt = useMemo(() => document.createElement('div'), [])
    let link: string = `https://player.twitch.tv/?channel=${login}&parent=streamernews.example.com`
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {
        const checkOutside = (e: any) => {
            if (e.target?.contains(ref.current) && e.target !== ref.current) {
                onClose && onClose();
            }
            return
        }
        document.addEventListener('click', checkOutside);
        return () => {
            document.removeEventListener('click', checkOutside)
        }
    }, [onClose])
    return createPortal(<>
            {open ?
                <Container>
                    <ContainerItem ref={ref}>
                        <Player src={link} frameBorder='0' allowFullScreen={true}/>
                    </ContainerItem>
                </Container> : null}
        </>
        , modalRootElement);
}

export default Modal;
import {createPortal} from "react-dom";
import {useEffect, useMemo} from "react";
import {Container,ContainerItem} from "./Modal.style";

const modalRootElement = document.querySelector('#portal')

const Modal =(props:any) =>{
    const {login,open,onClose} = props;
    const elemnt = useMemo(() => document.createElement('div'),[])
    let link:string= `https://player.twitch.tv/?channel=${login}&parent=streamernews.example.com`
    useEffect(()=>{
        if(open){ // @ts-ignore
            modalRootElement.appendChild(elemnt)

            return () => {
                // @ts-ignore
                modalRootElement.removeChild(elemnt);
            }
        }
    })

    if(open){
        return createPortal(<Container onClick={onClose}>
            <ContainerItem>
                <iframe src={link} frameBorder='0'/>
            </ContainerItem>
        </Container>
            ,elemnt);
    }
    return null
}
export default Modal;
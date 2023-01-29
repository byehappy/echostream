import {Container, ContainerDesr, ContainerHeader, ContainerOverlay, ContainerTitle} from "./StreamersItem.style";
import React, {useState} from "react";
import Modal from "../modal/Modal";

const StreamerItem = ({user_name, thumbnail_url,title}: any) => {
    const [open, setOpen] = useState(false)
    return (
        <li>
            <Container onClick={() => setOpen(true)}>
                <img src={thumbnail_url}/>
                <ContainerOverlay>
                    <ContainerHeader>
                        <ContainerTitle>
                            {user_name}
                        </ContainerTitle>
                    </ContainerHeader>
                    <ContainerDesr>{title}</ContainerDesr>
                </ContainerOverlay>
            </Container>
            {open && <Modal login={user_name} open={open} onClose={() => setOpen(false)}/>}
        </li>
    )
}

export default StreamerItem;
import {Container} from "./StreamersItem.style";
import React, {useState} from "react";
import Modal from "../modal/Modal";

const StreamerItem = ({user_name,thumbnail_url}:any) =>{
    const [open,setOpen] =useState(false)
    return(
        <>
        <Container onClick={() => setOpen(true)}>
            <img src={thumbnail_url}/>
            {user_name}
        </Container>
            <Modal login={user_name} open={open} onClose={()=>setOpen(false)}>321312</Modal>
        </>
    )
}

export default StreamerItem;
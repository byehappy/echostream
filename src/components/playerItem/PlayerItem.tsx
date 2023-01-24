
import {Channel} from "./PlayerItem.style";
import {useDispatch} from "react-redux";
import {SwitchIframe} from "../../actions";

const PlayerItem = ({ login,display_name, description, profile_image_url}:any) =>{
    const dispatch =useDispatch();
    return(
        <Channel onClick={()=>dispatch(SwitchIframe(login))}>
            <img src={profile_image_url}/>
            <b>{display_name}</b>
            <div>{description}</div>
        </Channel>
    )

}

export default PlayerItem;
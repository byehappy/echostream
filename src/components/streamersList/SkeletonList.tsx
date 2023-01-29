import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import {Container} from "./SkeletonList.style";

const SkeletonList = ({cards}:any) => {
    return <>
        {Array(cards)
        .fill(0)
        .map((_,i) => (
            <div key={i}>
                <SkeletonTheme height={'15vw'} baseColor="#313131" highlightColor="#525252">
                    <Skeleton wrapper={Container}/>
                </SkeletonTheme>
            </div>
        ))}
    </>
}
export default SkeletonList
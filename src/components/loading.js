import loadingStarWars from "../assets/img/loading2.gif"
import { LoaderContainer, LoaderImage } from "./loading.styled";

function Loading() {

    return (
        <LoaderContainer>
            <LoaderImage src={loadingStarWars} alt="Loading" />
        </LoaderContainer>
    )
}


export default Loading;


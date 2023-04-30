import Question from "./Question";
import NavBar from "./NavBar";
import What from "./What";

const ClientFirst = () => {
    return(
        <>
        <NavBar />
        </>
    )
}
const ClientSecond = () => {
    return(
        <>
            <What />
            <Question />
        </>
    )
}
export {ClientFirst, ClientSecond}
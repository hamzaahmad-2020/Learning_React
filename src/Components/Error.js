import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err)

    return(
        <>
        <h1>Ooops!</h1>
        <h2>This not valid Path</h2>
        <h3>{err.status + " , " + err.statusText}</h3>
        </>
    );
};
export default Error
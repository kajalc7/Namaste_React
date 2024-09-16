import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();//this will give exact error message by which reason youur app not getting loaded
    //from err object we can also provide mesage just like we have displayed in h3
    console.log(err);
    return(
        <div>
            <h1>Oops!!!! something went wrong🙈🙈🙈</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
};

export default Error;
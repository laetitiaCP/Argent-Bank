import "./error.scss";
function Error({errorCode, text}) {
    return (
        <h1 className="error">{errorCode} : {text}</h1>
    )
}

export default Error;
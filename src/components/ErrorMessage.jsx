 
function ErrorMessage({ message, onRetry }) {
    return (
        <div>
            <p>Oops..something is wrong: {message}</p> 
            <button onClick={onRetry} >Try again</button>
         
        </div>
    )
}

export default ErrorMessage;
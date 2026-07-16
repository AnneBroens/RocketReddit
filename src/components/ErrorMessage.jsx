 
function ErrorMessage({onRetry}) {
    return (
        <div>
            <p>Oops..something is wrong</p> 
            <button onClick={onRetry} >Try again</button>
         
        </div>
    )
}

export default ErrorMessage
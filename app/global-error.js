'use client'

const GlobalError = ({error, reset}) => {
    return(
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try Again!</button>
        </div>
    )
}

export default GlobalError
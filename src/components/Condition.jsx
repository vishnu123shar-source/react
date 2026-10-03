import { useState } from "react"

function Condition() {
    const [isLogging, setIsLogging] = useState(false)
    return (
        <>
            {isLogging ? <h3>Welcome Back</h3> : <p>Please Login</p>}
            <button onClick={() => {
                isLogging ? setIsLogging(false) : setIsLogging(true)
            }}>{isLogging ? 'Logout' : 'Login'}</button>
        </>
    )
}

export default Condition
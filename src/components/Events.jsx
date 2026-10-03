import { useState } from "react"

function Events(){
    const [count,setCount] = useState(0)
    function handleclick(){
        setCount(count+1)
    }

    return(
        <>
            <h3>{count}</h3>
            <button className="btn" onClick={handleclick}>Increse</button>
        </>
    )
}

export default Events
import { useEffect, useState } from "react"

function Render(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Add :",count)
    },[count])
    return(
        <>
          <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
}

export default Render
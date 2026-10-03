import { useState } from "react"

function AgeChecker(){
    const [age,setAge] = useState(0)
    return(
        <>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          {(age < 18 ) ? <p>Not Eligable</p> : <p>Eligable</p>}
        </>
    )
}

export default AgeChecker
import { useEffect, useState } from "react"

function Api(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data)=>{
                setUsers(data)
            })
    },[])
    return(
        <>
         {users.map((user)=>(
            <div key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>
         ))}
        </>
    )
}

export default Api
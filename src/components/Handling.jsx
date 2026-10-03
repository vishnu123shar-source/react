import { useEffect, useState } from "react"

function Handling() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something Went Wrong')
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>Error ..</h1>
    }
    return (
        <>
            <div>
                <h1>Users</h1>

                {users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Handling
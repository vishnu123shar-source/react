function Map(){
    const users = [
        {
            id : 1,
            name : 'Vishnu'
        },
        {
            id : 2,
            name : 'Dev'
        }
    ]
    return(
        <>
            {users.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </>
    )
}

export default Map
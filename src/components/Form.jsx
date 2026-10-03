import { useState } from "react"

function Form() {
    const [name, setName] = useState('')
    const [submit,setSubmit] = useState('')
    return (
        <>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" onClick={() =>setSubmit(name)}>Submit</button>
            </form>
            {submit !== '' && <h3>Hello {submit}</h3>}
        </>
    )
}

export default Form
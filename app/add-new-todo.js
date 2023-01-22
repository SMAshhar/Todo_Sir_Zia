'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


async function addTodo(name, refresh) {
    await fetch(`/api/todo/add`, {
        method:'POST',
        body: JSON.stringify({ name })
    })

    refresh()
}

export default function AddNewTodo() {
    const router = useRouter()
    let [name, setName] = useState("")  
    return (
        <div>
            <input type='text'onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={async () => {
                await addTodo(name, router.refresh); // used await because so that once the addTodo is over, the name is set to ""
            setName("")
            }}>Add</button>
        </div>
    )
}

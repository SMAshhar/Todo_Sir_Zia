'use client'
import { useRouter } from "next/router"
import { useState } from "react"

async function addTodo(name, refresh) {
    await fetch('/api/todo/add', {
        method: 'POST',
        body: JSON.stringify({ name })
    })
    refresh()
}

export default function AddNewTodo() {
    const router = useRouter()
    let [name, setName] = useState("") // for adding item entered in the text box 
    return (
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
            <button className="bg-blue-500 font-bold" onClick={async () => {
                await addTodo(name, router.refresh),
                setName("")         // after adding, will reset the text box to empty string
                }}>Add</button>
        </div>
    )
}
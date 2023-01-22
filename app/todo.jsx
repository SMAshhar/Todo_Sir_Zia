'use client'

import { useRouter } from "next/router"

async function update(id, isDone, refresh) {
    await fetch('/api/todo/update', {   // The link is short after rewriting it in the next.config  
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ id, isDone })
    })
    refresh()
}

async function deleteTodo(id, refresh){
    await fetch(`/api/todo/delete?id=${id}`,{ // The rewrite will work for client side component only. 
        method : `DELETE`,
    })

    refresh()
}

export default function Todo({ todo }) {
    const router = useRouter()
    return (
        <>
            <input type="checkbox" onChange={(e) => update(todo.id, e.target.checked, router.refresh)} />
            <span>{todo.name}</span>
            <button onClick={() => deleteTodo(todo.id, router.refresh)}>Delete</button>
        </>
    )
} 
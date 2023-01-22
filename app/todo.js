'use client' 

import { useRouter } from "next/navigation"

async function update (id, isDone, refresh ) {
    await fetch('/api/todo/update', {       // Note that this short address will work on client component only.
        method:'POST',
        // mode: 'no-cors', once rewrites function added in next.config.js, this method is no longer needed.
        body: JSON.stringify({ id, isDone }) 
    })
    refresh()
}

async function deleteTodo(id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE', //delete not awailable on no-cors mode. Change next.config.js
  
    })
    refresh();
}

export default function Todo({ todo }) {
    const router = useRouter()
    return (
        <>
            <input type='checkbox' onChange={(e) => update(todo.id, e.target.checked, router.refresh) }
            checked={todo.isDone}/> 
            <span>{todo.name}</span>
            <button onClick={() => deleteTodo(todo.id, router.refresh)}>Delete</button>
        </>
    )
}
// checked in line 16 will take the current status of the actual todo item and present the checked value on the screen
// But this will cause a problem. Since browser took check from the API, it will need to be refreshed 
// before we can see anyother check marks. Solution? - make browser refresh via useRouter.refresh as parameter in 
// line 5 and 17. Add refresh() on line 11. This will refresh the current rout without refreshing the whole page.

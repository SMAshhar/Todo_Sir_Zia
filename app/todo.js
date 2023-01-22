'use client' 

export default function Todo({ todo }) {
    return (
        <>
            <input type='checkbox' onChange={() => {}}/> 
            <span>{todo.name}</span>
            <button>Delete</button>
        </>
    )
}

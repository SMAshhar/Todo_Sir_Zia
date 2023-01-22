import Todo from "./todo";

const getTodos = async () => {
    let todos = await fetch('http://127.0.0.1/:3001/api/todo/list', { mode: 'no-cors' }); // 
    return todos.json();       // cannot reduce this path because its server component. 
};


export default async function TodoList() {
    const { todos } = await getTodos()
    console.log(todos)
    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((t) => {
                    return (
                        <li key={t.id} style={{ padding: "5px 0" }}>
                            <Todo todo={t} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

//{"todos":[{"id":"aca346b8-b383-4cae-a999-e4eb566c1796","name":"Learn Next.js","isDone":false},{"id":"5ff0050f-290f-4cc5-b169-d872a9dd2916","name":"Learn HTML","isDone":false},{"id":"ec27b143-a2b8-41a9-8191-9e6b612b9ae1","name":"Start new sideproject","isDone":false}]}
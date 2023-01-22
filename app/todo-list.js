import Todo from "./todo";

const getTodos = async () => {
    let todos = await fetch('https://mock-api-json-api.vercel.app/api/todo/list')
    return todos.json();        //cant make this code client b/c wont be able to fetch
}

export default async function TodoList() {
    const { todos } = await getTodos()

    return (
        <div>
            <ul style={
                {
                    listStyleType: 'none',
                    padding: 0
                }
            }>
           {todos.map((t) => {
            return (            //in order to place correct name we have to add as a prop todo={t}
                <li key={t.id} style={{padding: '5px 0'}}>
                   <Todo todo={t} /> 
                </li>
            )
           })}
            </ul>
        </div>
    )

}

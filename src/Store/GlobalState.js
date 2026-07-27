import { useStore, actions } from "./store";

function GlobalState() {
    const [state, dispatch] = useStore();
    const { todo, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    return (
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />

            <button onClick={handleAdd}>Add</button>
            {todo.map((todo, index) => {
                <li key={index}>{todo}</li>
            })}
        </div>
    );
}

export default GlobalState;

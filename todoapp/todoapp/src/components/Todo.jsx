import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo) => todo.done).length;

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />

            <Todolist todos={todos} setTodos={setTodos} />
            <Footer
                completedTasks={completedTodos}
                numberTasks={todos.length}
            />
        </div>
    );
}

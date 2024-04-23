import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false });

    function btnSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }

    return (
        <div>
            <form onSubmit={(e) => btnSubmit(e)} className={styles.todoForm}>
                <input
                    className={styles.modernInput}
                    value={todo.name}
                    type="text"
                    onChange={(e) =>
                        setTodo({ name: e.target.value, done: false })
                    }
                    placeholder="Enter TODO item..."
                />
                <button type="submit" className={styles.modernBtn}>
                    Add
                </button>
            </form>
        </div>
    );
}

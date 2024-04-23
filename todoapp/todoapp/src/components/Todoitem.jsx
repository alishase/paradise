import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name) {
        setTodos(
            todos.map((todo) =>
                todo.name === name ? { ...todo, done: !todo.done } : todo
            )
        );
    }
    const className = item.done ? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    className={className}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}
                </span>
                <span>
                    <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(item)}
                    >
                        x
                    </button>
                </span>
            </div>

            <hr className={styles.line} />
        </div>
    );
}

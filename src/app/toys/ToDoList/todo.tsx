import  styles from './todo.module.css'

export default function ToDo({ id, note, removeTodo }: {id: string, note: string, removeTodo: (arg: string) => void}) {
  return (
    <li className={styles.todoContainer}>
      <input className={styles.checkbox} type="checkbox" id={note} value={note} />
      <label htmlFor={note}>{note}</label>
      <button className={styles["delete-button"]} onClick={() => removeTodo(id)}>x</button>
    </li>
  );
}

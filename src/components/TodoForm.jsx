import styles from '../App.module.css'

function TodoForm({ inputValue, setInputValue, addTodo }) {
  return (
    <form onSubmit={addTodo} className={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  )
}

export default TodoForm

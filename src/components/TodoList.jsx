import TodoItem from './TodoItem'
import styles from '../App.module.css'

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList

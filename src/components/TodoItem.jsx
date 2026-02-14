import { useState } from 'react'
import TodoEdit from './TodoEdit'
import styles from '../App.module.css'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = (id, newText) => {
    onEdit(id, newText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      {isEditing ? (
        <TodoEdit
          todo={todo}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <div className={styles.todoContent}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className={styles.checkbox}
            />
            <span 
              className={styles.todoText}
              onDoubleClick={() => !todo.completed && setIsEditing(true)}
              title="Double-click to edit"
            >
              {todo.text}
            </span>
          </div>
          <div className={styles.todoActions}>
            {!todo.completed && (
              <button
                onClick={() => setIsEditing(true)}
                className={styles.editButton}
                title="Edit todo"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => onDelete(todo.id)}
              className={styles.deleteButton}
              aria-label="Delete todo"
            >
              ×
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem

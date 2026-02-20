import { useState } from 'react'
import TodoEdit from './TodoEdit'
import styles from '../App.module.css'

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// Helper function to format time
const formatTime = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Helper function to check if overdue
const isOverdue = (dueDate, completed) => {
  if (!dueDate || completed) return false
  return new Date(dueDate) < new Date()
}

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = (id, newText, newDueDate) => {
    onEdit(id, newText, newDueDate)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const overdue = isOverdue(todo.dueDate, todo.completed)

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
            <div className={styles.todoTextContainer}>
              <span
                className={`${styles.todoText} ${overdue ? styles.overdue : ''}`}
                onDoubleClick={() => !todo.completed && setIsEditing(true)}
                title="Double-click to edit"
              >
                {todo.text}
              </span>

              {/* Date displays */}
              <div className={styles.dateInfo}>
                <span className={styles.createdDate}>
                  Created: {formatDate(todo.createdAt)}
                </span>
                {todo.dueDate && (
                  <span className={`${styles.dueDate} ${overdue ? styles.overdueText : ''}`}>
                    Due: {formatDate(todo.dueDate)} at {formatTime(todo.dueDate)}
                    {overdue && <span className={styles.overdueBadge}>Overdue!</span>}
                  </span>
                )}
              </div>
            </div>
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

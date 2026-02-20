import { useState, useEffect } from 'react'
import styles from '../App.module.css'

function TodoEdit({ todo, onSave, onCancel }) {
  const [editText, setEditText] = useState(todo.text)
  const [dueDate, setDueDate] = useState('')
  const [dueTime, setDueTime] = useState('')

  // Initialize due date/time from todo
  useEffect(() => {
    if (todo.dueDate) {
      const date = new Date(todo.dueDate)
      setDueDate(date.toISOString().split('T')[0])
      setDueTime(date.toTimeString().slice(0, 5))
    }
  }, [todo.dueDate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editText.trim()) {
      // Create due date string if date is selected
      let dueDateTime = null
      if (dueDate) {
        dueDateTime = dueTime ? `${dueDate}T${dueTime}` : `${dueDate}T23:59`
      }

      onSave(todo.id, editText.trim(), dueDateTime)
    } else {
      onCancel()
    }
  }

  const handleClearDueDate = () => {
    setDueDate('')
    setDueTime('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoEditForm}>
      <div className={styles.editFields}>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className={styles.editInput}
          autoFocus
        />
        <div className={styles.editDateTime}>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={styles.dateInput}
            title="Set due date"
          />
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            className={styles.timeInput}
            title="Set due time"
            disabled={!dueDate}
          />
          {dueDate && (
            <button
              type="button"
              onClick={handleClearDueDate}
              className={styles.clearDateButton}
              title="Clear due date"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className={styles.editButtons}>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
        <button type="button" onClick={onCancel} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default TodoEdit

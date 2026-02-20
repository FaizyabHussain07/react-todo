import { useState } from 'react'
import styles from '../App.module.css'

function TodoForm({ inputValue, setInputValue, addTodo }) {
  const [dueDate, setDueDate] = useState('')
  const [dueTime, setDueTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Create due date string if date is selected
      let dueDateTime = null
      if (dueDate) {
        dueDateTime = dueTime ? `${dueDate}T${dueTime}` : `${dueDate}T23:59`
      }

      addTodo(e, dueDateTime)
      setDueDate('')
      setDueTime('')
    }
  }

  const handleButtonClick = (e) => {
    // Prevent default and handle click separately to ensure it works
    e.preventDefault()
    if (inputValue.trim()) {
      let dueDateTime = null
      if (dueDate) {
        dueDateTime = dueTime ? `${dueDate}T${dueTime}` : `${dueDate}T23:59`
      }

      addTodo(e, dueDateTime)
      setDueDate('')
      setDueTime('')
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formRow}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className={styles.input}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e)
            }
          }}
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.addButton}
        >
          Add
        </button>
      </div>
      <div className={styles.dateTimeRow}>
        <label className={styles.dateLabel}>
          <span>Due Date:</span>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={styles.dateInput}
            title="Set due date (optional)"
          />
        </label>
        <label className={styles.dateLabel}>
          <span>Time:</span>
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            className={styles.timeInput}
            title="Set due time (optional)"
            disabled={!dueDate}
          />
        </label>
      </div>
    </div>
  )
}

export default TodoForm

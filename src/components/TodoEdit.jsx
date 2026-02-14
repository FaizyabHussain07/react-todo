import { useState } from 'react'
import styles from '../App.module.css'

function TodoEdit({ todo, onSave, onCancel }) {
  const [editText, setEditText] = useState(todo.text)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editText.trim() && editText.trim() !== todo.text) {
      onSave(todo.id, editText.trim())
    } else {
      onCancel()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoEditForm}>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className={styles.editInput}
        autoFocus
      />
      <button type="submit" className={styles.saveButton}>
        Save
      </button>
      <button type="button" onClick={onCancel} className={styles.cancelButton}>
        Cancel
      </button>
    </form>
  )
}

export default TodoEdit

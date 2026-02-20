import styles from '../App.module.css'

function TodoFooter({ activeCount, completedCount, filter, setFilter, clearCompleted, deleteAll }) {
  return (
    <div className={styles.footer}>
      <span className={styles.count}>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className={styles.actionButtons}>
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className={styles.clearButton}
          >
            Clear completed
          </button>
        )}
        <button
          onClick={deleteAll}
          className={styles.deleteAllButton}
        >
          Delete All
        </button>
      </div>
    </div>
  )
}

export default TodoFooter

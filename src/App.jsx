import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (e) {
        console.error('Failed to parse saved todos:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos, isLoaded])

  // Add new todo
  const addTodo = (e, dueDateTime = null) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        dueDate: dueDateTime
      }
      setTodos([newTodo, ...todos])
      setInputValue('')
    }
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Edit todo
  const editTodo = (id, newText, newDueDate = null) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, dueDate: newDueDate } : todo
    ))
  }

  // Delete all todos
  const deleteAll = () => {
    setTodos([])
  }

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // Count active todos
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Todos</h1>

        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />

        {todos.length > 0 && (
          <TodoFooter
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
            deleteAll={deleteAll}
          />
        )}
      </div>
    </div>
  )
}

export default App

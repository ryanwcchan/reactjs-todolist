import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(
    [
      'Go to gym',
      'Buy groceries',
      'Walk dog',
      'Do laundry',
      'Clean house',
      'Finish project',
      'Call mom',
      'Meet with friends',
      'Go to the movies',
      'Read a book'
    ]
  )

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </main>
  )
}

export default App

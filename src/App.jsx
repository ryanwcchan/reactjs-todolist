import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const todoWithChecked = { text: newTodo, checked: false };
    const newTodoList = [...todos, todoWithChecked]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const editValue = todos[index].text
    setTodoValue(editValue)
    handleDeleteTodo(index)
  }

  function toggleChecked(index) {
    const newTodoList = todos.map((todo, todoIndex)=> {
      return todoIndex === index ? { ...todo, checked: !todo.checked } : todo
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    if (Array.isArray(localTodos)) {
      const validTodos = localTodos.map(todo => {
        return {
          text: todo.text || '',
          checked: todo.checked === true
        }
      })
      setTodos(validTodos)
    }
  }, [])

  return (
    <main>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
      />
      <TodoList 
        todos={todos} 
        handleDeleteTodo={handleDeleteTodo} 
        handleEditTodo={handleEditTodo} 
        toggleChecked={toggleChecked}
      />
    </main>
  )
}

export default App

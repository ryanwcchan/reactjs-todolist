import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos } = props
    
    const [todoValue, setTodoValue] = useState('')
    
    return (
        <div className="flex justify-center">
            <input 
                className="h-10 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="text" 
                placeholder="Enter todo..."
                value={todoValue}
                onChange={(e)=> {
                    setTodoValue(e.target.value)
                }} 
            />
            <button 
                className="h-10 bg-blue-500 text-white font-bold py-2 px-4 rounded-r-lg"
                onClick={()=> {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}
            >
                Add
            </button>
        </div>
    )
}
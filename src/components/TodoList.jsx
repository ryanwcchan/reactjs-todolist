/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const { todos, handleDeleteTodo, handleEditTodo, toggleChecked } = props

    return (
        <div className="p-2 pt-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {todos.map((todo, todoIndex)=> {
                    return (
                        <TodoCard 
                            key={todoIndex} 
                            index={todoIndex} 
                            checked={todo.checked}
                            handleDeleteTodo={handleDeleteTodo}
                            handleEditTodo={handleEditTodo}
                            toggleChecked={toggleChecked}
                        >
                            <p className="text-2xl">
                                {todo.text}
                            </p>
                        </TodoCard>
                    )
                })}
            </ul>
        </div>
    )
}

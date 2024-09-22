/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const { todos } = props

    return (
        <div className="p-2 pt-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {todos.map((todo, todoIndex)=> {
                    return (
                        <TodoCard {...props} key={todoIndex} index={todoIndex} >
                            <p className="text-2xl">{todo}</p>
                        </TodoCard>
                    )
                })}
            </ul>
        </div>
    )
}

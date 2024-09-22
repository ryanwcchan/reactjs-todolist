export default function TodoCard(props) {
    // eslint-disable-next-line react/prop-types
    const { children, handleDeleteTodo, index, handleEditTodo, toggleChecked, checked } = props
    
    return (
        <>
            <li className="flex justify-between items-center">
                <input 
                    type="checkbox" 
                    className="
                        w-6 
                        h-6 
                        text-blue-600 
                        bg-gray-100 
                        border-gray-300 
                        rounded-full 
                        dark:bg-gray-700 
                        dark:border-gray-600
                        "
                    checked={checked}
                    onChange={() => toggleChecked(index)}
                />
                <div className="flex item-center">
                    {children}
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => {
                            handleEditTodo(index)
                        }}
                    >
                        <i
                            className="fa-solid fa-pen-to-square text-3xl pr-3"
                        ></i>
                    </button>
                    <button 
                        onClick={() => {
                            handleDeleteTodo(index)
                        }}
                    >
                        <i
                            className="fa-solid fa-trash-can text-3xl"
                            
                        ></i>
                    </button>
                </div>
            </li>
        </>
  )
}

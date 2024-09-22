export default function TodoCard(props) {
    const {children} = props

    return (
        <>
            <li className="flex justify-between items-center">
                <div className="flex item-center">
                    {children}
                </div>
                <div className="flex space-x-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </li>
        </>
  )
}

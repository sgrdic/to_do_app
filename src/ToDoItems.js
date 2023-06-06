function ToDoItems({items, toggleCompleted}) {

  return (
    <>
    <ul>
      {
        items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" name="checkbox" checked={item.isCompleted} onChange={() => toggleCompleted(item.id)}></input>
            {item.text}
          </li>
        ))
      }
    </ul>
    </>
  )
} ;

export default ToDoItems;
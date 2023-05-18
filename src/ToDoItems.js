function ToDoItems({items}) {
  return (
    <>
    <ul>
      {
        items.map((item) => (
          <li>
            <input type="checkbox" name="checkbox" checked={item.isCompleted}></input>
            {item.text}
          </li>
        ))
      }
    </ul>
    </>
  )
} ;

export default ToDoItems;
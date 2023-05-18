function ToDoItems({items}) {
  return (
    <>
    <ul>
      {
        items.map((item) => (
          <li>{item.text}</li>
        ))
      }
    </ul>
    </>
  )
} ;

export default ToDoItems;
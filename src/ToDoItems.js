import ListGroup from 'react-bootstrap/ListGroup';


function ToDoItems({items, toggleCompleted}) {

  return (
    <>
      
      <ListGroup>
    
      {
        items.map((item) => (
          <ListGroup.Item key={item.id}>
            <input className='m-1' type="checkbox" name="checkbox" checked={item.isCompleted} onChange={() => toggleCompleted(item.id)}></input>
            <span className={item.isCompleted ? 'completed' : ''}>{item.text}</span>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
    
    </>
  )
} ;

export default ToDoItems;
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



function AddItemForm(props) {
  const [text, setText] = useState("");

  const handleSetText = (event) => {
    setText(event.target.value)
  }
  
  return (
    <>
      <Col className='pl-0' xs={8}>
        <Form.Control className='' value={text} onChange={handleSetText} type="text" placeholder="Add item here" />
      </Col>
        
      <Col xs={4}>
        <Button className='m-0 floatRight fullWidth' onClick={() => {
          props.addItem(text);
          setText('')
        }} variant="primary">Add</Button>
      </Col>
    </>
  )
} ;

export default AddItemForm;
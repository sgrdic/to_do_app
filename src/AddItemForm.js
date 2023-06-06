import { useState } from "react";

function AddItemForm(props) {
  const [text, setText] = useState("");

  const handleSetText = (event) => {
    setText(event.target.value)
  }
  
  return (
    <>
      <input value={text} type="text" onChange={handleSetText}></input>
      <button onClick={() => {
        props.addItem(text);
        setText('')
      }}>Add</button>
    </>
  )
} ;

export default AddItemForm;
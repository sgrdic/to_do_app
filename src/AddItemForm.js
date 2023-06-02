import { useState } from "react";

function AddItemForm(props) {
  const [text, setText] = useState("");

  const handleSetText = (event) => {
    setText(event.target.value)
  }
  
  return (
    <>
      <input type="text" onKeyUp={handleSetText}></input>
      <button onClick={() => props.addItem(text)}>Add</button>
    </>
  )
} ;

export default AddItemForm;
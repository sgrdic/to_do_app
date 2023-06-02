import SearchBar from "./SearchBar";
import ToDoItems from "./ToDoItems";
import AddItemForm from "./AddItemForm";
import { useEffect, useState } from "react";

function HighLevelContainer (props) {
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    setToDoItems([
      {
        id:1,
        text:'Operi sude',
        isCompleted: false,
      },
      {
        id:2,
        text:'Operi ves',
        isCompleted: true,
      }
    ])
  }, [])

  const addItem = (text) => {
    setToDoItems((prev) => {
      return [...prev, {id: 3, text, isCompleted: false }]
    })
  };

  return (
    <>
      <div><SearchBar/></div>
      <div><ToDoItems items={toDoItems}/></div>
      <div><AddItemForm addItem={addItem} /></div>
    </>
  )
};

export default HighLevelContainer;
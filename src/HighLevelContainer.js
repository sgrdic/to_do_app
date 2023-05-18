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
  return (
    <>
      <div><SearchBar/></div>
      <div><ToDoItems items={toDoItems}/></div>
      <div><AddItemForm/></div>
    </>
  )
};

export default HighLevelContainer;
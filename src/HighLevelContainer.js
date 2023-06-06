import SearchBar from "./SearchBar";
import ToDoItems from "./ToDoItems";
import AddItemForm from "./AddItemForm";
import { useEffect, useState } from "react";

function HighLevelContainer (props) {
  const [toDoItems, setToDoItems] = useState([]);
  const [searchText, setSearchText] = useState('')
  
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

  const handleUserInput = e => {
    setSearchText (e.target.value)
    
  }

  const addItem = (text) => {
    setToDoItems((prev) => {
      return [...prev, {id: 3, text, isCompleted: false }]
    })
  };

  const filteredToDoItems = () => {
    return toDoItems.filter(toDoItem => {
      return toDoItem.text.startsWith(searchText)
    })
  };

  return (
    <>
      <div><SearchBar input={searchText} userInput={handleUserInput}/></div>
      <div><ToDoItems items={filteredToDoItems()}/></div>
      <div><AddItemForm addItem={addItem} /></div>
    </>
  )
};

export default HighLevelContainer;
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
        id:2,
        text:'Operi sude',
        isCompleted: false,
      },
      {
        id:1,
        text:'Operi ves',
        isCompleted: true,
      }
    ])
  }, [])

  const toggleCompleted = (idOfElementClicked) => {
    setToDoItems((previous) => {
      return previous.map((elem) => {
        if(elem.id === idOfElementClicked) {
          return {...elem, isCompleted: !elem.isCompleted}
        } else {
          return elem
        }
        
      })
    })
  };

  const handleUserInput = e => {
    setSearchText (e.target.value)
    
  }

  const addItem = (text) => {
    setToDoItems((prev) => {
      return [...prev, {id: nextId(), text, isCompleted: false }]
    })
  };

  const filteredToDoItems = () => {
    return toDoItems.filter(toDoItem => {
      return toDoItem.text.startsWith(searchText)
    })
  };

  
  const nextId = () => {
    let biggestId= 0;
    toDoItems.forEach((item) => {
      if (item.id > biggestId) {
        biggestId=item.id
      }
    });
    return biggestId+1
  }

  return (
    <>
      <div><SearchBar input={searchText} userInput={handleUserInput}/></div>
      <div><ToDoItems toggleCompleted={toggleCompleted} items={filteredToDoItems()}/></div>
      <div><AddItemForm addItem={addItem} /></div>
    </>
  )
};

export default HighLevelContainer;
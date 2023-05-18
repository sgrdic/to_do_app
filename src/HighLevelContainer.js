import SearchBar from "./SearchBar";
import ToDoItems from "./ToDoItems";
import AddItemForm from "./AddItemForm";

function HighLevelContainer (props) {
  return (
    <>
      <div><SearchBar/></div>
      <div><ToDoItems/></div>
      <div><AddItemForm/></div>
    </>
  )
};

export default HighLevelContainer;
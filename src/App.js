
import './App.css';
import List from './List'
import {useState} from 'react'
import Item from './Item';
import TodoForm from './TodoForm';


function App() {
 
  const [items, setItems] = useState([])
  function onAddItem(text){
    let it = new Item(text) 
    setItems([...items, it])
  }
  
  return (
  <div>
     <h1>Todo List</h1>
    
     <TodoForm onAddItem={onAddItem}></TodoForm>
  
     <List items ={items}></List>
    
  </div>
    
  );
}


export default App;


import './App.css';
<<<<<<< HEAD
import List from './components/List'
import {useEffect, useState} from 'react'
import Item from './components/Item';
import TodoForm from './components/TodoForm';
import Modal from "./components/Modal";
=======
import List from './List'
import {useState} from 'react'
import Item from './Item';
import TodoForm from './TodoForm';
>>>>>>> parent of 3fdd68e (todo with react)

const SAVED_ITEMS = "savedItems"

function App() {


  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([])

  useEffect(()=>{
    let itSalvos = JSON.parse(localStorage.getItem(SAVED_ITEMS))
      if(itSalvos){
      setItems(itSalvos)
      console.log(itSalvos)
      }
  }, [])
  
  useEffect(()=>{
   localStorage.setItem(SAVED_ITEMS,JSON.stringify(items))
  },[items])
  
  
  function onAddItem(text){
    let it = new Item(text) 
    setItems([...items, it])
    onHideModal();
  }
  
<<<<<<< HEAD
  function onDone(item){
    let updatedItems = items.map(it=>{
      if(it.id === item.id){
        it.done = !it.done;
      }return it;
    })
    setItems(updatedItems);
  }
  
  function onHideModal(e){
    setShowModal(false);
}
  
  return (
  <div className='container'>
    <header className='header'><h1>Todo List</h1><button onClick={()=>{setShowModal(true)}} className='addButton'>+</button></header>  
  
     <List onDone={onDone} onItemDeleted={onItemDeleted} items ={items}></List>
    <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
=======
  return (
  <div>
     <h1>Todo List</h1>
    
     <TodoForm onAddItem={onAddItem}></TodoForm>
  
     <List items ={items}></List>
    
>>>>>>> parent of 3fdd68e (todo with react)
  </div>
    
  );
}


export default App;

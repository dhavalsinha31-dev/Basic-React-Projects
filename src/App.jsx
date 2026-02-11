import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }
  const handleInput = (e) => {
    setTodo(e.target.value)

  }
  const handleToggle = () => {
    todo.isCompleted = !todo.isCompleted
  }
  const handleDelete= (id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
  }
  const handleEdit = (id) => {
    const newTodo = prompt("Enter updated todo:");
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        item.todo = newTodo;
      }
      return item;
    });
    setTodos(updatedTodos);
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="Todo_title">Add Todo</h1>
        <input type="text" className="input-box" value={todo} onChange={handleInput} required />
        <button className='Add_btn' onClick={handleAdd}>Add</button>
        <div>
          {todos.map((item) => (
            <div key={item.id} className="todo-list">
              <input type="checkbox" className='checkbox' onCLick={handleToggle}/>
              <div className="todo-items">{item.todo}</div>
              <button className='delete_btn' onClick={() => handleDelete(item.id)}>Delete</button>
              <button className='edit_btn' onClick={() => handleEdit(item.id)}>Edit</button>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default App

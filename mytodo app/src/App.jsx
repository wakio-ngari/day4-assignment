import  React,{ useState } from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App=()=>{
  const [todos,setTodos]=useState([]);
   const addTodo=(todo)=>{
    setTodos([...todos,todo]);
   };

   const deleteTodo=(index)=>{
     const updatedTodos=[...todos];
     updatedTodos.splice(index,1);
    setTodos(updatedTodos);
   };

   return(
    <div className="app">
       <Header title="To-Do List"/>
           <TodoList todos={todos}onAdd={addTodo}onDelete={deleteTodo}/>

    </div>
   );
};
export default App;

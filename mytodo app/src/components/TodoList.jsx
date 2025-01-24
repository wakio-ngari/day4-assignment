import React,{useState}from 'react';

const TodoList=({todos,onAdd,onDelete})=>{
    const[task,setTask]=useState ('');

    const handleAdd=()=>{
        if (task.trim()==='')return;
        onAdd(task);
        setTask('');

    };
    return(
        <div>
            <input
            type="text"
              value={task}
                onChange={(e)=>setTask(e.target.value)}
                  placeholder="Add task"
            
            />
              <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>
                        {todo}<button onClick={()=>onDelete(index)}className='delete'>Delete</button>
                    </li>
                ))}
            </ul>
            
         

        </div>
    );
};
export default TodoList;
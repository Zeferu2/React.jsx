import { useState } from "react";
import Add from "./add";
import List from "./List";

function TodoList(){
    const[items,setItems] = useState([]);
    const[checked,setChecked] = useState(false);
    function handleAdd(task){
        console.log(task);
        setItems([
            ...items,
            {
                id:items.length+1,
                name:task,
                done:false,
            }
     ]
);

}
function handleDelete(name){
    setItems(items.filter(item=>item.name!==name));
}
function handleCheck(id){
    setChecked(items.map(item=>{
        if(item.id===id){
            item.done=true;
    
        }
    return item; 
        
    }
))};

    return(
      <> <Add handleAdd={handleAdd}/>
         <List items={items} onDelete={handleDelete} onCheck={handleCheck} setChecked={checked}/>
      </>
    );
}

export default TodoList;

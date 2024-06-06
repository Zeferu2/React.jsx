import { useState} from "react";
function Add ({handleAdd}) {
// react hooks: useState,useEffect,useCallBack,useMemo,useReduce
const[task,setTask] = useState("");
function handleChange(event) {
    console.log(event.target.name);
    setTask(event.target.value);
}
function handleClick(event) {
    handleAdd(task); 
}
// Event handler: onchange,onClick,onSubmit,onBlur,onFocus,onMouseOver,onMouseOut,

    return (
        <>
        <input type = "text" name ="taskName" onChange={handleChange}/> 
        <button onClick={handleClick} disabled ={!task}>add Task</button>
        </>
    )

}
export default Add
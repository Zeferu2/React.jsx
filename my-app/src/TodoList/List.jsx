function List({items,onDelete,onCheck,checked}){
    function handleDelete(name){
        onDelete(name)
    }
function handleCheck(event){
    console.log(event.target.checked)
    onCheck(event.target.value)
}
const styles = {
    textDecoration: checked? "line-through"  : "none"
       
}
return (
    <ul>
        {items.map((item, index) =>{
           return <li key={index} style={styles}><input type ="checkbox" onChange={handleCheck}/> {item.name}<button onClick={()=>handleDelete(item.name)}>delete</button></li>
        })}
    </ul>
)
}
export default List;

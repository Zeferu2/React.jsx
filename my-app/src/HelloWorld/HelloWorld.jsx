import React from "react"
import './HelloWorld.css'
function HelloWorld(){ 
    const list =[
        {
        name : "sport",
        completed : "yes",
    },
    {
        name : "tennis",
        completed : "no",
    }
    ]
    return(
        <ul className="HelloWorld"> Hello World 
            { 
            list.map((item, index) => (
                item.completed==="no"&& (<li>{item.name} {item.completed}</li> 
            )
                

            ))}
        </ul>
    )

}

export default HelloWorld;
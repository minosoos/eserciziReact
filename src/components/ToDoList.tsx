import { useState } from "react"
import ToDoListAdder from "./ToDoListAdder"

export default function ToDoList(){

    const [itemList, setItemlist] = useState([""]);

    return <>
        <div><ToDoListAdder ToDoListAdd={(itemAdded) => {
            let newList = itemList.concat(itemAdded)
            setItemlist(newList);
        }}/></div>
        <div>
            {itemList.map((item,i) => item ? <div><button onClick={() => 
                {
                    let newList = itemList.filter((itemToRemove) => itemToRemove !== item)
                    setItemlist(newList);
                }
            }>  X  </button>{item}</div> : "")}
        </div>
    </>
}
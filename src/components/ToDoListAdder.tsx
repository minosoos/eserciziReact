import { useState } from "react";

export default function ToDoListAdder(props:{
    readonly ToDoListAdd : (itemAdded : string) => void;
}){
    const {ToDoListAdd} = props
    const [text, setText] = useState("");

    return <>
        <input type="text" value={text} onChange={(ev) =>setText(ev.target.value)} /><button onClick={() => {
            ToDoListAdd(text);
            setText("");
            }}>aggiungi</button>
    </>
}
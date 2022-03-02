import { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');

    return ( <div>
        <input onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="task name"/>
        <input  onChange={(e) => setTaskDate(e.target.value)} type="text" placeholder="task date"/>
        <button onClick={() => addTodo({taskName, taskDate})}>Save Todo</button>
    </div> );
}
 
export default AddTodo;
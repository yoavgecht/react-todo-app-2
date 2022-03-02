import moment from 'moment';
const CompletedTask = ({todo, taskCompleted, deleteTodo}) => {
    return ( 
        <div key={todo.id} className='task-wrap' onClick={() => taskCompleted({todo})}>    
            <span>{moment(todo.date).format("dd/mm/yyyy HH:mm")}</span>
            <span><del>{todo.text}</del></span><div className={`priority ${todo.priority}`}></div> 
            <button onClick={(e) => deleteTodo(e, todo)}>delete</button>
            
        </div>
     );
}
 
export default CompletedTask;
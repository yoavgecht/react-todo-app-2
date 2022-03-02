import moment from 'moment';

const IncompletedTask = ({todo,taskCompleted, deleteTodo}) => {

    return ( 
        <div key={todo.id} className='task-wrap' onClick={() => taskCompleted({todo})}>
            <span>{moment(todo.date).format("dd/mm/yyyy HH:mm")}</span>
            <span>{todo.text}</span><div className={`priority ${todo.priority}`}></div> 
            <button onClick={(e) => deleteTodo(e, todo)}>delete</button>
        </div>
     );
}
 
export default IncompletedTask;
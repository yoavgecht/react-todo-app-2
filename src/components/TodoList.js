import { useState } from "react";
import IncompletedTask from './IncompletedTask';
import CompletedTask from './CompletedTask';
import Encouregment from './Encouregment';

function TodoList({todos, deleteTodo}) {
  
  const [updatedTodos, setUpdatedTodos] = useState([]);
  const [encouregmentMessage, setEncouregmentMessage] = useState(false);

  const taskCompleted = ({todo}) => {
    const completedTodo = todos.find(task => task.id === todo.id);
    !completedTodo.done ? completedTodo.done = true : completedTodo.done = false;
    const todosClone = todos.map(t => ({...t}));
    setUpdatedTodos(todosClone);
    checkAllDone();
  }

  const checkAllDone = () => {
    const isAllDone = todos.filter(todo => !todo.done);
    isAllDone.length === 0 ? setEncouregmentMessage(true) : setEncouregmentMessage(false)
  }

  const renderTodos = todos.map((todo) => {
    return todo.done && !encouregmentMessage ? <CompletedTask todo={todo} deleteTodo={deleteTodo} taskCompleted={taskCompleted}/> : 
    <IncompletedTask todo={todo} deleteTodo={deleteTodo} taskCompleted={taskCompleted}/>  
})
  return (
    <div className="todo-list">
      {!encouregmentMessage ? renderTodos : <Encouregment setEncouregmentMessage={setEncouregmentMessage}/>}
    </div>
  );
}

export default TodoList;

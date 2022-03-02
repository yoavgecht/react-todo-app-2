import logo from '../assets/logo.svg';
import '../App.css';
import TodoList from './TodoList';
import { useState, useEffect } from "react";
import TodosApi from '../api/TodosApi';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]); 
  const [addTodoMode, setAddTodoMode] = useState(false);

  const addTodo = (todo) => {
    setAddTodoMode(false);
    TodosApi.add(todo).then(() => {
      TodosApi.list().then((response) => {
        console.log(response)
        setTodos(response);
    });
    })
  }

  const deleteTodo = (e, todo) => {
    e.stopPropagation()
    TodosApi.remove(todo.id).then(() => {
      TodosApi.list().then((response) => {
        console.log(response)
        setTodos(response);
    });
  });
}

  useEffect(() => {
    const todos = TodosApi.list().then((response) => {
      console.log(response)
      setTodos(response);
    });
  }, [])


  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>My Todo List</p>
      </header>
      <body>
        <button onClick={() => setAddTodoMode(true)}>Add Todo</button>
        {!addTodoMode &&<TodoList todos={todos} deleteTodo={deleteTodo}/> }
        {addTodoMode && <AddTodo addTodo={addTodo}/>}
      </body>
    </div>
  );
}

export default App;

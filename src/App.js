import React, { useState } from "react";
import "./App.css";
function Todo({ index, todo, completeTodo, deleteTodo}) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text} 
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Get Groceries",
      isCompleted: false
    },
    {
      text: "Create Todo App",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const deleteTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo = {deleteTodo}
          ></Todo>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;

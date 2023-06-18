import { useState } from "react";
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

const TodosLogic = () => {
    const [todos, setTodos] = useState([]);
  
    const handleAddTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
  
    const handleEditTodo = (id, editedText) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: editedText } : todo
        )
      );
    };
  
    const handleDeleteTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
  
    return (
      <div>
        <InputTodo onAdd={handleAddTodo} />
        <TodosList
          todos={todos}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    );
  };

  export default TodosLogic;
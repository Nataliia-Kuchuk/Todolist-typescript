import React, { useEffect, useState } from 'react';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import { ITodo } from '../Interfaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // declare var confirm:(question:string) => boolean
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      "Are you sure that you want to delete the task?"
    );
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </div>
  );
};

export default TodosPage;
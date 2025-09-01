import { useState } from "react";
import type { Todo } from "@/types/Todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onToggle = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  };

  const addTodo = (title: string) => {
    const id = Number(Date.now());
    const newTodo = { id, title, completed: false };

    setTodos([...todos, newTodo]);
  };

  const clearCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);

    setTodos(filteredTodos);
  };

  return {
    todos,
    onToggle,
    addTodo,
    clearCompleted,
  };
}

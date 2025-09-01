import { useState } from "react";
import type { Todo } from "@/types/Todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (title: string) => {
    const id = Number(Date.now());
    const newTodo = { id, title, completed: false };

    setTodos((prev) => [...prev, newTodo]);
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    onToggle,
    addTodo,
    clearCompleted,
  };
}

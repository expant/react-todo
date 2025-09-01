import type { Todo } from "@/types/Todos";

export const getActiveTodos = (todos: Todo[]) =>
  todos.filter((todo) => !todo.completed);
export const getCompletedTodos = (todos: Todo[]) =>
  todos.filter((todo) => todo.completed);

export const getFilteredTodos = (todos: Todo[], activeTab: string): Todo[] => {
  switch (activeTab) {
    case "active":
      return getActiveTodos(todos);
    case "completed":
      return getCompletedTodos(todos);
    default:
      return todos;
  }
};

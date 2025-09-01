import { useState } from "react";
import { getFilteredTodos } from "@/utils/todoFilters";
import type { Todo } from "@/types/Todos";

export function useTodoTabs(todos: Todo[]) {
  const [activeTab, setActiveTab] = useState("all");
  const filteredTodos = getFilteredTodos(todos, activeTab);

  return { activeTab, setActiveTab, filteredTodos };
}

import { List } from "antd";
import { TodoItem } from "./TodoItem";
import type { TodoListProps } from "@/types/Todos";

export function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem key={todo.id} {...todo} onToggle={onToggle} />
      )}
    />
  );
}

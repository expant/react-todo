export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

export type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
};

export type TodoInputProps = {
  todos: Todo[];
  addTodo: (title: string) => void;
};

export type TodoControlsProps = {
  todosLength: number;
  activeTab: string;
  setActiveTab: (key: string) => void;
  clearCompleted: () => void;
};

import { Flex, Card, Typography } from "antd";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoControls } from "./TodoControls/TodoControls";
import { useTodos } from "@/hooks/useTodos";
import { useTodoTabs } from "@/hooks/useTodoTabs";
import { getActiveTodos } from "@/utils/todoFilters";
import styles from "./TodosBlock.module.css";

const { Title } = Typography;

export function TodosBlock() {
  const { todos, onToggle, addTodo, clearCompleted } = useTodos();
  const { activeTab, setActiveTab, filteredTodos } = useTodoTabs(todos);

  return (
    <Flex className={styles.container}>
      <Card className={styles.card}>
        <Title>Todos</Title>
        <TodoInput todos={todos} addTodo={addTodo} />
        <TodoList todos={filteredTodos} onToggle={onToggle} />
        <TodoControls
          todosLength={getActiveTodos(todos).length}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clearCompleted={clearCompleted}
        />
      </Card>
    </Flex>
  );
}

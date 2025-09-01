import { List, Checkbox, Typography, Space } from "antd";
import type { TodoItemProps } from "@/types/Todos";

const { Text } = Typography;

export function TodoItem({ id, title, completed, onToggle }: TodoItemProps) {
  return (
    <List.Item>
      <Space>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <Text delete={completed}>{title}</Text>
      </Space>
    </List.Item>
  );
}

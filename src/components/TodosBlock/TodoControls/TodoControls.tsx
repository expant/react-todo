import { Typography, Space, Tabs, Button } from "antd";
import { tabs } from "@/constants/tabs";
import type { TodoControlsProps } from "@/types/Todos";
import styles from "./TodoControls.module.css";

const { Text } = Typography;

export function TodoControls({
  todosLength,
  activeTab,
  setActiveTab,
  clearCompleted,
}: TodoControlsProps) {
  return (
    <Space className={styles.space}>
      <Text>{todosLength} items left</Text>
      <Tabs
        items={tabs}
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      />
      <Button danger onClick={clearCompleted}>
        Clear Completed
      </Button>
    </Space>
  );
}

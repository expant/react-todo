import { Input, Form } from "antd";
import { useTodoInput } from "@/hooks/useTodoInput";
import type { TodoInputProps } from "@/types/Todos";

export function TodoInput(props: TodoInputProps) {
  const { value, error, handleOnChange, handleSubmit } = useTodoInput(props);

  return (
    <Form.Item validateStatus={error ? "error" : undefined} help={error || ""}>
      <Input
        value={value}
        placeholder="What needs to be done?"
        onChange={handleOnChange}
        onPressEnter={handleSubmit}
      />
    </Form.Item>
  );
}

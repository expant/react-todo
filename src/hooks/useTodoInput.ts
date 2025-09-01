import { useState } from "react";
import type { ChangeEvent } from "react";
import type { TodoInputProps } from "@/types/Todos";

export function useTodoInput({ todos, addTodo }: TodoInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(null);
  };

  const handleSubmit = () => {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    const exists = todos.some((todo) => todo.title === trimmedValue);
    if (exists) {
      setError("Todo already exists");
      return;
    }

    addTodo(trimmedValue);
    setValue("");
  };

  return {
    value,
    error,
    handleOnChange,
    handleSubmit,
  };
}

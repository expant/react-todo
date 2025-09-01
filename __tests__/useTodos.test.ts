import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../src/hooks/useTodos";

describe("useTodos", () => {
  const addTodoAndGetId = (
    result: { current: ReturnType<typeof useTodos> },
    title: string
  ) => {
    act(() => result.current.addTodo(title));
    return result.current.todos[result.current.todos.length - 1].id;
  };

  it("должен добавлять новый todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("New Todo");
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].title).toBe("New Todo");
    expect(result.current.todos[0].completed).toBe(false);
  });

  it("должен переключать completed у todo", () => {
    const { result } = renderHook(() => useTodos());

    const id = addTodoAndGetId(result, "Test Todo");

    act(() => result.current.onToggle(id));
    expect(result.current.todos[0].completed).toBe(true);

    act(() => result.current.onToggle(id));
    expect(result.current.todos[0].completed).toBe(false);
  });

  it("должен удалять все выполненные todos при clearCompleted", () => {
    const { result } = renderHook(() => useTodos());
    let counter = 1;

    jest.spyOn(global.Date, "now").mockImplementation(() => counter++);

    const firstId = addTodoAndGetId(result, "Todo 1");
    addTodoAndGetId(result, "Todo 2");

    act(() => result.current.onToggle(firstId));
    act(() => result.current.clearCompleted());

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe("Todo 2");

    jest.restoreAllMocks();
  });
});

import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../src/hooks/useTodos";

describe("useTodos", () => {
  let result: { current: ReturnType<typeof useTodos> };

  beforeEach(() => {
    const hookResult = renderHook(() => useTodos());
    result = hookResult.result;
  });

  const addTodo = (title: string) => act(() => result.current.addTodo(title));

  const addTodoAndGetId = (title: string) => {
    addTodo(title);
    return result.current.todos[result.current.todos.length - 1].id;
  };

  const toggleTodo = (id: number) => act(() => result.current.onToggle(id));

  const clearCompleted = () => act(() => result.current.clearCompleted());

  it("должен добавлять новый todo", () => {
    addTodo("New Todo");
    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].title).toBe("New Todo");
    expect(result.current.todos[0].completed).toBe(false);
  });

  it("должен переключать completed у todo", () => {
    const id = addTodoAndGetId("Test Todo");

    toggleTodo(id);
    expect(result.current.todos[0].completed).toBe(true);

    toggleTodo(id);
    expect(result.current.todos[0].completed).toBe(false);
  });

  it("должен удалять все выполненные todos при clearCompleted", () => {
    let counter = 1;

    const dateMock = jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => counter++);

    const firstId = addTodoAndGetId("Todo 1");
    addTodoAndGetId("Todo 2");

    toggleTodo(firstId);
    clearCompleted();

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe("Todo 2");

    dateMock.mockRestore();
  });
});

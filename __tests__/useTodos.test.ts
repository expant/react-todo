import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../src/hooks/useTodos";

describe("useTodos", () => {
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

    act(() => {
      result.current.addTodo("Test Todo");
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.onToggle(id);
    });

    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.onToggle(id);
    });

    expect(result.current.todos[0].completed).toBe(false);
  });

  test("должен удалять все выполненные todos при clearCompleted", () => {
    const { result } = renderHook(() => useTodos());

    let counter = 1;
    jest.spyOn(global.Date, "now").mockImplementation(() => counter++);

    act(() => {
      result.current.addTodo("Todo 1");
      result.current.addTodo("Todo 2");
    });

    act(() => {
      const firstTodoId = result.current.todos[0].id;
      result.current.onToggle(firstTodoId);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].title).toBe("Todo 2");

    jest.restoreAllMocks();
  });
});

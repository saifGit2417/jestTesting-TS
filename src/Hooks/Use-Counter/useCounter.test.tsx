import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("render initial count correctly", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    // /it will takw intial value of 0
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    // /it will takw intial value of 0
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});

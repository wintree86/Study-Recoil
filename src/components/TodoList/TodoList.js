import React from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import { todoListState } from "./TodoState";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <React.Fragment>
      {/* <TodoListStats/> */}
      {/* <TodoListFilters/> */}
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </React.Fragment>
  );
}

function TodoListWrapper() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  )
}

export default TodoListWrapper;

import React from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import { filteredTodoListState } from "./TodoState";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <React.Fragment>
      <TodoListStats />
      <TodoListFilters />
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
  );
}

export default TodoListWrapper;

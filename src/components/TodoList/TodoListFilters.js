import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "./TodoState";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <React.Fragment>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </React.Fragment>
  );
}
export default TodoListFilters;

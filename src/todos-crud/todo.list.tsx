import React, { useState } from "react";

import * as db from "../todos-api/todos.db.json";

import TodoListitem from "./todo.listitem";

type TodoListProps = {
  todos: Todo[];
  toggleCompleted: ToggleCompletedFunc;
};

const TodoList = ({ todos, toggleCompleted }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListitem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

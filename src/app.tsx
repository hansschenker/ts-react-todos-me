import React, { FC, useMemo, useState } from "react";

// rxjs
// import { interval, tap } from "rxjs";
// import { useObservable } from "./utils/rxjs-react-helpers";

type AppProps = {
  message: string;
};


import * as db from "./todos-api/todos.db.json";
import TodoForm from "./todos-crud/todo.form";
import TodoList from "./todos-crud/todo.list";

export function App({ message }: AppProps) {

  const [todos, setTodos] = useState(db.todos);

  const toggleCompleted = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
  const addTodo = (title: string) => { 
    const newTodo:Todo = {
      id: todos.length + 1,
      title,
      completed: false
    }
    // do not add empty entries
    title.trim() !== "" && setTodos([...todos, newTodo]);
    // setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

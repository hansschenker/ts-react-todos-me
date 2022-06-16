import React, { FC, useMemo, useState } from "react";
// rxjs
// import { interval, tap } from "rxjs";
// import { useObservable } from "./utils/rxjs-react-helpers";
import { List } from "./todos/todo.helpers";
import { TodoList } from "./todos/todos.list";

type AppProps = {
  message: string;
};

//  export const App = ({ message }: AppProps) =>

//  <>
//  <div>{message}</div>;
//  </>
import * as db from "./todos-api/todos.db.json";
import TodoListitem from "./todos-crud/todo.listitem";

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
  

  return (
    <div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <ul>
        {todos.map((todo) => (
          <TodoListitem key={todo.id} todo={todo} toggleCompleted= {toggleCompleted} />
        ))}
      </ul>
      {/* <TodoListitem todo={todos[0]} /> */}
    </div>
  );
}

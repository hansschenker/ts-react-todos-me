import React from 'react'
import './todo.listitem.css'

type TodoListitemProps = {
    todo: Todo
    toggleCompleted: ToggleCompletedFunc
}
const TodoListitem = ({ todo, toggleCompleted}:TodoListitemProps) => {
  return (
    <li>
        <label className={todo.completed ? 'completed' : undefined}>
            <input type="checkbox" checked={todo.completed} onChange={() =>toggleCompleted(todo.id)} />
            { todo.title}
        </label>
    </li>
  )
}

export default TodoListitem
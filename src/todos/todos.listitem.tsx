import React from 'react'
import { Todo } from './todo.types'

export type TodosListitemProps = {
    todo: Todo,
    onClick: (todo: Todo) => void
}

const TodosListitem = ({todo}:TodosListitemProps) => {
  return (
    <div onClick={item => alert(todo)}> {todo.name} </div>
  )
}

export default TodosListitem
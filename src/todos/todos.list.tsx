import React from 'react'
import { List } from './todo.helpers'
import { Todo } from './todo.types'

type TodoListProps = {
 todos: Todo[]
}
export const TodoList = () => {
   const todosList = [
    {
      id:1,
      name: 'Bruce',
    },
    {
      id:2 ,
      name: 'Clark',
      // priority: 1,
      // completed: true
    },
    {
      id: 3,
      name: 'Princess',
  
    }]
    return (
        <List items={ todosList} onClick={item => alert(item.name)} />
    )}

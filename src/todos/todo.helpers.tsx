import React from 'react'

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
  }
  
 type Item = {
    id: number, name:string
 } 
  export const List = <T extends Item>({
    items,
    onClick
  }: ListProps<T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map(item => {
          return (
            <div key={item.id} onClick={() => onClick(item)}>
              {item.name}
            </div>
          )
        })}
      </div>
    )
  }
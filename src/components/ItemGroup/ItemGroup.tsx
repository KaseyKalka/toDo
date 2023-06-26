import React from 'react'
import './ItemGroup.css'

interface Props {
  toDoItems: string[];
  deleteItem: () => void
}

// ****** Use a useState for each group item? ********
const ItemGroup = ({toDoItems, deleteItem}: Props) => {
  return (
    <div className='item-group'>
      To Do: 
      <ul>
        {toDoItems.map((item, index) => {
          return <li key={index}>{item}
                  <button onClick={deleteItem}></button>
                </li> 
        })}
      </ul>
    </div>
  )
}

export default ItemGroup

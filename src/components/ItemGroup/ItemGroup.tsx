import './ItemGroup.css'

interface Props {
  toDoItems: string[];
  deleteItem: () => void
}

const ItemGroup = ({toDoItems, deleteItem}: Props) => {
  return (
    <div className='item-container'>
      <div className='item-group'>
        To Do: 
        <ul>
          {toDoItems.map((item, index) => {
            return <li key={index}>{item}
                    <button title='Delete' onClick={deleteItem}> X </button>
                  </li> 
          })}
        </ul>
      </div>
    </div>
  )
}

export default ItemGroup

import { useState } from "react"
import ItemGroup from "./components/ItemGroup/ItemGroup"
import Form from "./components/Form/Form"

function App() {

  const [toDoItems, setToDoItem] = useState(['Make this project work'])

  return (
    <>
    <Form toDoItems={toDoItems} setToDoItem={() => setToDoItem([])}/>
    <ItemGroup toDoItems={toDoItems} deleteItem={() => setToDoItem([])} />
    </>
  )
}

export default App

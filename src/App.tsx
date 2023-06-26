import { useState } from "react"
import Form from "./components/Form/Form"
import ItemGroup from "./components/ItemGroup/ItemGroup"

function App() {

  const [toDoItems, setToDoItem] = useState(['test', 'test1', 'test2'])

  return (
    <>
    <Form />
    <ItemGroup toDoItems={toDoItems} deleteItem={() => setToDoItem([])} />

    </>
  )
}

export default App

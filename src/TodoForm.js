import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("")

  function Add(event) {
    event.preventDefault()
    if (text) {
      props.onAddItem(text)
      // setitems([...items ,text])
      setText("");
    }
  }
  function handleChange(event) {
    let t = event.target.value
    setText(t)
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={Add}>Add</button>
    </form>
  )

}

export default TodoForm; 
import React, { useState } from 'react'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <div>
      <input type='text' onChange={(event) => { setText(event.target.value) }}></input>
      <button onClick={() => { onAddTask(text) }}>add</button>
    </div>
  )
}

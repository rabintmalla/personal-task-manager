import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Personal')

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim() === '') return
    onAddTask(title.trim(), category)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs doing?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Personal</option>
        <option>Work</option>
        <option>Urgent</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span className="task-title">{task.title}</span>
      <span className={`task-category ${task.category.toLowerCase()}`}>{task.category}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem
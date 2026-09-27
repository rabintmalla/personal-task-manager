function TaskStats({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length
  const remaining = tasks.length - completed

  return (
    <div className="task-stats">
      <span>{remaining} remaining</span>
      <span>{completed} completed</span>
    </div>
  )
}

export default TaskStats 
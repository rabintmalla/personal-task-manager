import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'
import FilterBar from './components/Filterbar'
import TaskStats from './components/Taskstats'
import './index.css'

const STORAGE_KEY = 'task-manager-tasks'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All') 

 
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

 
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

 
  function addTask(title, category) {
    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  
  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

 
  function getFilteredTasks() {
    if (filter === 'Active') return tasks.filter((t) => !t.completed)
    if (filter === 'Completed') return tasks.filter((t) => t.completed)
    return tasks
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      <h1> Personal Task Manager </h1>
      <p className="app-subtitle">Stay on top of what needs doing.</p>
      <TaskForm onAddTask={addTask} />
      <FilterBar activeFilter={filter} onFilterChange={setFilter} />
      <TaskStats tasks={tasks} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
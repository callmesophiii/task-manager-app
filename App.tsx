import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './types';
import './App.css';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Finish Lab',
    description: 'Complete the Task Manager lab',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-06-15'
  },
  {
    id: '2',
    title: 'Review Code',
    description: 'Check the code for errors',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2025-06-17'
  }
  
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: string }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

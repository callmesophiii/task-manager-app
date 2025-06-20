import type { TaskItemProps } from '../../types';

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.status}`}>
  <div style={{ flex: 1 }}>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>
      <span className={`priority-${task.priority}`}>
        Priority: {task.priority}
      </span>{' '}
      | Due: {task.dueDate}
    </p>
  </div>
  <div className="task-controls">
    <select
      value={task.status}
      onChange={(e) => onStatusChange(task.id, e.target.value as any)}
    >
      <option value="pending">Pending</option>
      <option value="in-progress">In-Progress</option>
      <option value="completed">Completed</option>
    </select>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
</div>

  );
}


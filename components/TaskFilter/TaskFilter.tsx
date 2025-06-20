import type { TaskFilterProps } from '../../types';

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div>
      <select onChange={(e) => onFilterChange({ status: e.target.value as any })}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select onChange={(e) => onFilterChange({ priority: e.target.value as any })}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

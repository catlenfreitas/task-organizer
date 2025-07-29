import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
               {task.name} 
            </span>
            <button onClick={() => onToggle(task.id)}>Concluído ✅</button>
            <button onClick={() => onDelete(task.id)}>Excluir ❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

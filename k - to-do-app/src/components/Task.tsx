//visualização única de task
import React from "react";
import {Task as TaskType} from '../Task';


interface TaskProps{
    task: TaskType;
    onRemove: (taskId: number) => void;
    onUpdateStatus: (taskId: number) => void;
}


const TaskComponent: React.FC<TaskProps> = ({ task, onRemove, onUpdateStatus }) => {
    const handleRemoveClick = () => {
        onRemove(task.id);
    };

    const handleStatusToggleClick = () => {
        onUpdateStatus(task.id);
    }

    return (
        <div>
        <h3>{task.name}</h3>//verificar linha abaixo
        {task.description && <p>{task.description}</p>}
        <p>Created At: {task.createdAt.toLocaleString()}</p>
        <p>Status: {task.completed ? 'Complete' : 'Incomplete'}</p>
        <button onClick={handleRemoveClick}>Remover Task</button> {/*para remover a task */}
        <button onClick={handleStatusToggleClick}>Alternar Status</button>
        </div>
    );
};


export default TaskComponent;
//Visualização de todas as Tasks
import React from 'react';
import { Task } from '../Task';
import TaskComponent from './Task';


interface TaskListProps{
    tasks: Task[];
    onRemove: (taskId: number) => void;
    onUpdateStatus: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemove, onUpdateStatus }) => {
    return(
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskComponent task={task} onRemove={onRemove} onUpdateStatus={onUpdateStatus}/>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
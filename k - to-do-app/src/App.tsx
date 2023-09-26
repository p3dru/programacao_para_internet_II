import React, { useState } from 'react';
import { Task } from './Task';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTaskName.trim() === ''){
      alert('O nome não pode estar vazio');
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
      completed: false,
      createdAt: new Date(),
    }

    setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewTaskDescription('');
  };

  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed};
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <label htmlFor='taskName'>Nome da Tarefa:</label>
        <input
          type='text'
          id='taskName'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='taskDescription'>Descrição da Tarefa</label>
        <textarea
          id='taskDescription'
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
      <TaskList tasks={tasks} onRemove={removeTask} onUpdateStatus={updateTaskStatus}/>
    </div>
  );
};

export default App;

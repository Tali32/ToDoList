import React, { useState } from 'react';
import Moment from 'moment';
import {Tasks} from "./components/Tasks";
import { AddTaskForm } from './components/AddTaskForm';
import { Banner } from './components/Banner';

const initialTasks: Array<Task> = [
  
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask: ToggleTask = selectedTask =>{
    const newTasks = tasks.map(Task=>{
      if(Task === selectedTask){
        return{
          ...Task,
          completed: !Task.completed
        }
      }
      return Task;
    });
    setTasks(newTasks);
  };

  const addTask: AddTask = newTask =>{
    newTask.trim() !== "" && 
    setTasks([...tasks, {
      id: (tasks.length === 0 ? 1 : tasks[tasks.length-1].id+1),
      text:newTask, date: Moment(new Date(Date.now())).format('HH:MM DD-MM-YYYY'), 
      completed: false
    }]);
  }

  const cleanAll: CleanAll = tasks =>{
    setTasks(tasks.splice(0,0));
  };

  return (
    <React.Fragment>
      <Banner/>
      <AddTaskForm addTask={addTask}/>
      <Tasks tasks={tasks} toggleTask={toggleTask} cleanAll={cleanAll}/>
    </React.Fragment>
  );
}

export default App;
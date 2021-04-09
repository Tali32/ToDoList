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
    setTasks([...tasks, {text:newTask, date: Moment(new Date(Date.now())).format('HH:MM DD-MM-YYYY'), completed: false}]);
  }

  return (
    <React.Fragment>
      <Banner/>
      <AddTaskForm addTask={addTask}/>
      <Tasks tasks={tasks} toggleTask={toggleTask}/>
    </React.Fragment>
  );
}

export default App;
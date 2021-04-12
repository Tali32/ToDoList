import React, { useState } from 'react';
import {Tasks} from "./components/Tasks";
import { AddTaskForm } from './components/AddTaskForm';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

const initialTasks: Array<Task> = [
  
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask: ToggleTask = selectedTask =>{
    const newTasks = tasks.map(task=>{
      if(task === selectedTask){
        return{
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addTask: AddTask = newTask =>{
    newTask.trim() !== "" && 
    setTasks([...tasks, {
      id: (tasks.length === 0 ? 1 : tasks[tasks.length-1].id+1),
      text: newTask, 
      date: new Date(Date.now()), 
      completed: false
    }]);
  }

  const delTask: DelTask = selectedTask =>{
    setTasks(tasks.filter(task => task !== selectedTask));
  }

  const cleanAll: CleanAll = tasks =>{
    setTasks(tasks.splice(0,0));
  };

  return (
    <React.Fragment>
      <Banner/>
      <AddTaskForm addTask={addTask}/>
      <Tasks tasks={tasks} toggleTask={toggleTask} delTask={delTask} cleanAll={cleanAll}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
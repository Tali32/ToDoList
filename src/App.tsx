import React, { useState } from 'react';
import Moment from 'moment';
import {TasksItem} from "./components/TasksItem";

const initialTasks: Array<Task> = [
  {text: "Work by progect", date: Moment(new Date(2021,4,6,17,15)).format('HH:MM DD-MM-YYYY'), completed: false},
  {text: "Go online at 19:00", date: Moment(new Date(2021,4,6,17,21)).format('HH:MM DD-MM-YYYY'), completed: true}
];

const App: React.FC = () => {
  const [Tasks, setTasks] = useState(initialTasks);

  const toggleTask: ToggleTask = selectedTask =>{
    const newTasks = Tasks.map(Task=>{
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

  return (
    <React.Fragment>
      <TasksItem task={Tasks[0]} toggleTask = {toggleTask}/>
      <TasksItem task={Tasks[1]} toggleTask = {toggleTask}/>
    </React.Fragment>
  );
}

export default App;
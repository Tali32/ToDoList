import React, { useState } from 'react';
import Moment from 'moment';
import {Tasks} from "./components/Tasks";

const initialTasks: Array<Task> = [
  {text: "Work by progect aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc", date: Moment(new Date(2021,4,6,17,15)).format('HH:MM DD-MM-YYYY'), completed: false},
  {text: "Go online at 19:00", date: Moment(new Date(2021,4,6,17,21)).format('HH:MM DD-MM-YYYY'), completed: true}
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

  return (
    <React.Fragment>
      <Tasks tasks={tasks} toggleTask={toggleTask}/>
    </React.Fragment>
  );
}

export default App;
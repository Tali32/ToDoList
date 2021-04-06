import React from 'react';
import Moment from 'moment';
import {TasksItem} from "./components/TasksItem";

const Tasks: Array<Task> = [
  {text: "Work by progect", date: Moment(new Date(2021,4,6,17,15)).format('HH:MM DD-MM-YYYY'), completed: false},
  {text: "Go online at 19:00", date: Moment(new Date(2021,4,6,17,21)).format('HH:MM DD-MM-YYYY'), completed: false}
];

const App: React.FC = () => {
  return (
    <TasksItem task={Tasks[0]}/>
  );
}

export default App;
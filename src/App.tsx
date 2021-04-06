import React from 'react';
import Moment from 'moment';
import {TasksItem} from "./components/TasksItem";

const Tasks: Array<Task> = [
  {text: "Work by progect", date: Moment(new Date(2021,4,6,17,15)).format('HH:MM DD-MM-YYYY'), completed: false},
  {text: "Go online at 19:00", date: Moment(new Date(2021,4,6,17,21)).format('HH:MM DD-MM-YYYY'), completed: true}
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TasksItem task={Tasks[0]}/>
      <TasksItem task={Tasks[1]}/>
    </React.Fragment>
  );
}

export default App;
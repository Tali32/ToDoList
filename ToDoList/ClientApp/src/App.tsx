import React, { useEffect, useState } from 'react';
import { Tasks } from "./components/Tasks";
import { AddTaskForm } from './components/AddTaskForm';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import axios from 'axios';

const initTasks: Task[] = [];

const App: React.FC = () => {
  const [tasks, SetTasks] = useState(initTasks);

  useEffect(() => {
    axios.get('api/Task/Index').then(resp =>{
      SetTasks(resp.data);
    });
  }, [])

  const toggleTask: ToggleTask = selectedTask => {
    const newTasks = tasks.map(task => {
      if (task === selectedTask) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    SetTasks(newTasks);
  };

  const formatDate: FormatDate = (dateTime: string) => {
    const tmpDate = new Date(dateTime);
    const time = tmpDate.toLocaleTimeString();
    const date = tmpDate.toLocaleDateString();
  
    return time + '; ' + date;
  };

  const addTask: AddTask = newTask => {
    if(newTask.trim() !== "")
    {
      const task: Task = {
        id: (tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1),
        description: newTask,
        date: formatDate(new Date(Date.now()).toString()),
        completed: false
      };

      //axios.post('api/Task/Create', task);

      SetTasks([...tasks, task]);
    } 
  }

  const delTask: DelTask = selectedTask => {
    axios.delete("api/Task/Delete/" + selectedTask.id);

    SetTasks(tasks.filter(task => task !== selectedTask));
  }

  const cleanAll: CleanAll = tasks => {
    axios.delete("api/Task/Remove");

    SetTasks(tasks.splice(0, 0));
  };

  return (
    <React.Fragment>
      <Banner />
      <AddTaskForm addTask={addTask} />
      <Tasks tasks={tasks} toggleTask={toggleTask} delTask={delTask} cleanAll={cleanAll} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
import React from 'react';
import { TasksItem } from './TasksItem';
import "./Tasks.css";

interface TasksProps{
    tasks: Array<Task>;
    toggleTask: ToggleTask;
}

export const Tasks: React.FC<TasksProps> = ({tasks, toggleTask}) =>{
    return(
        <div className="list">
            <ul>
                {tasks.map(task =>{
                    return <TasksItem key={task.text} task={task} toggleTask={toggleTask}/>
                })}
            </ul>
        </div>
    );
};
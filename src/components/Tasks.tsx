import React from 'react';
import { TasksItem } from './TasksItem';

interface TasksProps{
    tasks: Array<Task>;
    toggleTask: ToggleTask;
}

export const Tasks: React.FC<TasksProps> = ({tasks, toggleTask}) =>{
    return(
        <ul>
            {tasks.map(task =>{
                return <TasksItem key={task.text} task={task} toggleTask={toggleTask}/>
            })}
        </ul>
    );
};
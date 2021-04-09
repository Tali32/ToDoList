import React, { FormEvent } from 'react';
import { TasksItem } from './TasksItem';
import "./Tasks.css";

interface TasksProps{
    tasks: Array<Task>;
    toggleTask: ToggleTask;
    cleanAll: CleanAll;
}

export const Tasks: React.FC<TasksProps> = ({tasks, toggleTask, cleanAll}) =>{
    const handleClean=(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        cleanAll(tasks);
    };

    return(
        <div className="body">
            <div className="header">
                <label>Tasks:</label>
            </div>
            <div className="list">
                <div className="clean">
                    <button type="button" className="clean-btn" onClick={handleClean}>Clean all</button>
                </div>
                {tasks.map(task =>{
                    return <TasksItem key={task.id} task={task} toggleTask={toggleTask}/>
                })}
            </div>
            
        </div>
    );
};
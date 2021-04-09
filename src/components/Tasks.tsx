import React, { FormEvent } from 'react';
import { TasksItem } from './TasksItem';
import "./Tasks.css";

interface TasksProps{
    tasks: Array<Task>;
    toggleTask: ToggleTask;
    delTask: DelTask;
    cleanAll: CleanAll;
}

export const Tasks: React.FC<TasksProps> = ({tasks, toggleTask, delTask, cleanAll}) =>{
    const handleClean=(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        cleanAll(tasks);
    };

    return(
        tasks.length !== 0 ?
        <div className="body">
            <div className="header">
                <label>Tasks:</label>
            </div>
            <div className="list">
                <div className="clean">
                    <button type="button" className="clean-btn" onClick={handleClean}>Clean all</button>
                </div>
                {tasks.map(task =>{
                    return <TasksItem key={task.id} task={task} toggleTask={toggleTask} delTask={delTask}/>
                })}
            </div>
        </div>
        :
        <div className="body">
            <div className="header">
                <label>Tasks:</label>
            </div>
            <div className="list">
                <div className="clean">
                    <button type="button" className="clean-btn" onClick={handleClean}>Clean all</button>
                </div>
                <h2 className="empty-list">You have no tasks</h2>
            </div>
        </div>    
    );
};
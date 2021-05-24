import React, { FormEvent } from 'react';
import { TasksItem } from './TasksItem';
import {Loader} from './Loader';
import "./Tasks.css";

interface TasksProps{
    tasks: Array<Task>;
    toggleTask: ToggleTask;
    delTask: DelTask;
    cleanAll: CleanAll;
    loading: boolean;
}

export const Tasks: React.FC<TasksProps> = ({tasks, toggleTask, delTask, cleanAll, loading}) =>{
    const handleClean=(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        cleanAll(tasks);
    };

    return(
        loading === true ?
        <div className="body">
            <div className="list">
                <Loader/>
            </div>
        </div> 
        :
        tasks.length !== 0 ?
        <div className="body">
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
            <div className="list">
                <h2 className="empty-list">You have no tasks</h2>
            </div>
        </div>    
    );
};
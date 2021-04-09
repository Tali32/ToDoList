import React, { FormEvent } from "react";
import "./TasksItem.css";

interface TasksItemProps{
    task: Task;
    toggleTask: ToggleTask;
    delTask: DelTask;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task, toggleTask, delTask} ) =>{
    const handleDel =(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        delTask(task);
    };

    return (
        <div className="list_item">
            <div className="item-content">
                <input type="checkbox" className="completed-checkbox" checked={task.completed} onChange={() =>toggleTask(task)}/>
                <div className="text">
                    <label className={task.completed ? "complete" : undefined}>
                        {task.text}
                    </label>
                </div>
                <div className="date_item">
                <label className="date">Date: </label>
                <label >{task.date}</label>
                </div>
            </div>
            <div className="del">
                <button type="button" className="del-button" onClick={handleDel}>Delete</button>
            </div> 
        </div>
    );
};
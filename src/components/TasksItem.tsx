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

    const formatDate: FormatDate = (date) => {

        var time = date.toLocaleTimeString();
        var dat = date.toLocaleDateString();
      
        return time + '; ' + dat;
    };

    return (
        <div className="list_item">
            <div className="item-content">
                <input type="checkbox" id={task.id.toString()} checked={task.completed} onChange={() =>toggleTask(task)}/>
                <label htmlFor={task.id.toString()} className={task.completed ? "complete" : "uncomplete"}>
                    {task.text}
                </label>
                <div className="date_item">
                <label className="date">Date: </label>
                <label >{formatDate(task.date)}</label>
                </div>
            </div>
            <div className="del">
                <button type="button" className="del-button" onClick={handleDel}>Delete</button>
            </div> 
        </div>
    );
};
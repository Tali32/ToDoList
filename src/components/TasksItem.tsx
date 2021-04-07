import React from "react";
import "./TasksItem.css";

interface TasksItemProps{
    task: Task;
    toggleTask: ToggleTask;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task, toggleTask} ) =>{
    return (
        <div className="list_item">
            <ul>
            <input type="checkbox" checked={task.completed} onChange={() =>toggleTask(task)}/>
            <div className="text">
                <label className={task.completed ? "complete" : undefined}>
                    {task.text}
                </label>
            </div>
            <div>
                <label >{task.date}</label>
            </div>
            </ul>
        </div>
    );
};
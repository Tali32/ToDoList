import React from "react";
import "./TasksItem.css";

interface TasksItemProps{
    task: Task;
    toggleTask: ToggleTask;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task, toggleTask} ) =>{
    return (
        <div className="list_item">
            <li>
            <input type="checkbox" checked={task.completed} onChange={() =>toggleTask(task)}/>
            <div className="text">
                <label className={task.completed ? "complete" : undefined}>
                    {task.text}
                </label>
            </div>
            <label className="date">
                {" " + task.date}
            </label>
            </li>
        </div>
    );
};
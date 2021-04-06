import React from "react";
import "./TasksItem.css";

interface TasksItemProps{
    task: Task;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task} ) =>{
    return (
        <li>
            <label className={task.completed ? "completed" : undefined}>
                <input type="checkbox" checked={task.completed}/>
                {task.text + " "}
            </label>
            <label className="date">
                {task.date}
            </label>
        </li>
    );
};
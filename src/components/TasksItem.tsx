import React from "react";
import "./TasksItem.css";

interface TasksItemProps{
    task: Task;
    toggleTask: ToggleTask;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task, toggleTask} ) =>{
    return (
        <li>
            <label className={task.completed ? "completed" : undefined}>
                <input type="checkbox" checked={task.completed} onChange={() =>toggleTask(task)}/>
                {task.text}
            </label>
            <label className="date">
                {" " + task.date}
            </label>
        </li>
    );
};
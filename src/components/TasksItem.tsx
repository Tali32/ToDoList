import React from "react";

interface TasksItemProps{
    task: Task;
}

export const TasksItem: React.FC<TasksItemProps> = ( {task} ) =>{
    return (
        <li>
            <label>
                <input type="checkbox" checked={task.completed}/>
                {task.text} {task.date}
            </label>
        </li>
    );
};
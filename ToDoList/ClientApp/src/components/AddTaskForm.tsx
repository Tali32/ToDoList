import React, { ChangeEvent, FormEvent, useState } from 'react';
import "./AddTaskForm.css";

interface AddTaskFormProps{
    addTask: AddTask;
};

export const AddTaskForm: React.FC<AddTaskFormProps> = ({addTask}) =>{
    const [newTask, setNewTask] = useState("");

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setNewTask(e.target.value);
    };

    const handleSubmit=(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    };

    return (
        <form className="add_task_form">
            <input type="text" className="task_text" value={newTask} onChange={handleChange}/>
            <button type="submit" className="add_button" onClick={handleSubmit}>Add task</button>
        </form>
    );
};
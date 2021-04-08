type Task = {
    text: string;
    date: string;
    completed: boolean;
};

type ToggleTask = (selectedTask: Task) => void;

type AddTask = (newTask: string) => void;
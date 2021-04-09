type Task = {
    id: number;
    text: string;
    date: string;
    completed: boolean;
};

type ToggleTask = (selectedTask: Task) => void;

type AddTask = (newTask: string) => void;

type CleanAll = (tasks: Array<Task>) => void;
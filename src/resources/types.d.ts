type Task = {
    id: number;
    description: string;
    date: Date;
    completed: boolean;
};

type ToggleTask = (selectedTask: Task) => void;

type AddTask = (newTask: string) => void;

type DelTask = (selectedTask: Task) => void;

type CleanAll = (tasks: Array<Task>) => void;

type FormatDate = (date: string) => string;
using System.Collections.Generic;

namespace ToDoList.Models
{
    public interface ITaskDataAccessLayer
    {
        public IEnumerable<Task> GetAllTasks();
        public int AddTask(Task task);
        public int UpdateTask(Task task);
        public int DeleteTask(int id);
        public int DeleteAllTasks();
    }
}
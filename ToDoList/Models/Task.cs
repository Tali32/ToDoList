#nullable disable

namespace ToDoList.Models
{
    public partial class Task
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public bool Completed { get; set; }

        public  Task()
        {}

        public Task(int id, string description, string date, bool completed)
        {
            Id = id;
            Description = description;
            Date = date;
            Completed = completed;
        }
    }
}
using System;
using System.Collections.Generic;

#nullable disable

namespace ToDoList.Models
{
    public partial class Task
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public bool Completed { get; set; }
    }
}

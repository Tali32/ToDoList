using System;
using System.Collections.Generic;
using ToDoList.Models;

namespace ToDoList.Interfaces
{
    public interface IRepository
    {
        Task Get(int id);
        IEnumerable<Task> GetAll();
        int Create(Task task);
        int Update(Task task);
        int Delete(int id);
        int DeleteAll();
    }
}
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ToDoList.Models
{
    public class TaskDataAccessLayer
    {
        ToDoListContext db = new ToDoListContext();

        public IEnumerable<Task> GetAllTasks()
        {
            try
            {
                return db.Tasks.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddTask(Task task)
        {
            try
            {
                db.Tasks.Add(task);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateTask(Task task)
        {
            try
            {
                db.Entry(task).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteTask(int id)
        {
            try
            {
                Task task = db.Tasks.Find(id);
                db.Tasks.Remove(task);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteAllTasks()
        {
            try
            {
                db.Tasks.RemoveRange(GetAllTasks());
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}

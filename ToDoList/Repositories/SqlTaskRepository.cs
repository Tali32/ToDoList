using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ToDoList.Interfaces;
using ToDoList.Models;

namespace ToDoList.Repositories
{
    public class SqlTaskRepository : IRepository
    {
        private TaskContext _db;

        public Task Get(int id)
        {
            return _db.Tasks.Find(id);
        }

        public IEnumerable<Task> GetAll()
        {
            return _db.Tasks.ToList();
        }

        public int Create(Task task)
        {
            _db.Tasks.Add(task);
            _db.SaveChanges();
            return 1;
        }

        public int Update(Task task)
        {
            _db.Entry(task).State = EntityState.Modified;
            _db.SaveChanges();
            return 1;
        }

        public int Delete(int id)
        {
            Task task = Get(id);
            _db.Tasks.Remove(task);
            _db.SaveChanges();
            return 1;
        }

        public int DeleteAll()
        {

            _db.Tasks.RemoveRange(GetAll());
            _db.SaveChanges();
            return 1;
        }

        public SqlTaskRepository()
        {
            this._db = new TaskContext();
        }
    }
}
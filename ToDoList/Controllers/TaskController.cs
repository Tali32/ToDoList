using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ToDoList.Repositories;
using Task = ToDoList.Models.Task;

namespace ToDoList.Controllers
{
    public class TaskController : Controller
    {
        private SqlTaskRepository _objtask;

        [HttpGet]  
        [Route("api/Task/Index")]  
        public IEnumerable<Task> Index()  
        {  
            return _objtask.GetAll();  
        }  

        [HttpPost]  
        [Route("api/Task/Create")]  
        public int Create([FromBody] Task task)  
        {  
            return _objtask.Create(task);  
        }  

        [HttpPut]
        [Route("api/Task/Edit")]
        public int Edit([FromBody] Task task)
        {
            return _objtask.Update(task);
        }

        [HttpDelete]  
        [Route("api/Task/Delete/{id}")]  
        public int Delete(int id)  
        {  
            return _objtask.Delete(id);  
        }

        [HttpDelete]
        [Route("api/Task/Remove")]
        public int Remove()
        {
            return _objtask.DeleteAll();
        }

        public TaskController()
        {
            this._objtask = new SqlTaskRepository();
        }
    }
}
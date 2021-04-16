using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ToDoList.Models;
using Task = ToDoList.Models.Task;

namespace ToDoList.Controllers
{
    public class TaskController : Controller
    {
        TaskDataAccessLayer objtask = new TaskDataAccessLayer();

        [HttpGet]  
        [Route("api/Task/Index")]  
        public IEnumerable<Task> Index()  
        {  
            return objtask.GetAllTasks();  
        }  

        [HttpPost]  
        [Route("api/Task/Create")]  
        public int Create([FromBody] Task task)  
        {  
            return objtask.AddTask(task);  
        }  

        [HttpPut]
        [Route("api/Task/Edit")]
        public int Edit([FromBody] Task task)
        {
            return objtask.UpdateTask(task);
        }

        [HttpDelete]  
        [Route("api/Task/Delete/{id}")]  
        public int Delete(int id)  
        {  
            return objtask.DeleteTask(id);  
        }

        [HttpDelete]
        [Route("api/Task/Remove")]
        public int Remove()
        {
            return objtask.DeleteAllTasks();
        }
    }
}
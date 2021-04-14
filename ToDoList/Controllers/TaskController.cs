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
        public int Create(Task task)  
        {  
            return objtask.AddTask(task);  
        }  

        [HttpGet]  
        [Route("api/Task/Details/{id}")]  
        public Task Details(int id)  
        {  
            return objtask.GetTaskData(id);  
        }

        [HttpPut]
        [Route("api/Task/Edit")]
        public int Edit(Task task)
        {
            return objtask.UpdateEmployee(task);
        }

        [HttpDelete]  
        [Route("api/Task/Delete/{id}")]  
        public int Delete(int id)  
        {  
            return objtask.DeleteTask(id);  
        }  
    }
}
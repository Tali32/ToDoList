using System.Collections.Generic;
using Moq;
using NUnit.Framework;
using ToDoList.Controllers;
using ToDoList.Interfaces;
using ToDoList.Models;

namespace ToDoList.Tests.Controllers
{
    class TaskControllerTests
    {
        private TaskController _taskController;
        private Mock<IRepository> _mockRepository;
        private Task _testTask;

        [Test]
        public void Create_Valid()
        {
            //Arrange
            _mockRepository
                .Setup(x => x.Create(_testTask))
                .Returns(1);

            //Act
            var result = _taskController.Create(_testTask);

            //Assert
            Assert.AreEqual(1, result);
        }

        [Test]
        public void Index_Valid()
        {
            //Arrange
            List<Task> tasks = new List<Task>()
            {
                new Task()
            };
            _mockRepository
                .Setup(x => x.GetAll())
                .Returns(tasks);

            //Act
            var result = _taskController.Index();

            //Assert
            Assert.IsInstanceOf(typeof(List<Task>), result);
        }

        [Test]
        public void Edit_Valid()
        {
            //Arrange
            _taskController.Create(_testTask);
            _mockRepository
                .Setup(x => x.Update(_testTask))
                .Returns(1);

            //Act
            var result = _taskController.Edit(_testTask);

            //Assert
            Assert.AreEqual(1, result);
        }

        [Test]
        public void Delete_Valid()
        {
            //Arrange
            int id = 1;
            _mockRepository
                .Setup(x => x.Delete(id))
                .Returns(1);

            //Act
            var result = _taskController.Delete(id);

            //Assert
            Assert.AreEqual(1, result);
        }

        [Test]
        public void Remove_Valid()
        {
            //Arrange
            _mockRepository
                .Setup(x => x.DeleteAll())
                .Returns(1);

            //Act
            var result = _taskController.Remove();

            //Assert
            Assert.AreEqual(1, result);
        }

        [SetUp]
        public void SetUp()
        {
            _taskController = new TaskController();
            _mockRepository = new Mock<IRepository>();
            _testTask = new Task(1, "Test task", "12:59:59; 31.01.2000", false);
        }
    }
}
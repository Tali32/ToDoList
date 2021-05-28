using NUnit.Framework;
using ToDoList.Models;

namespace ToDoList.Tests.Models
{
    class TaskTests
    {
        private Task _task;

        [Test]
        public void ChangingProperyID_Valid()
        {
            //Arrange
            int newId = 1;

            //Act
            _task.Id = newId;
            var result = _task.Id;

            //Assert
            Assert.AreEqual(1, result);
        }

        [Test]
        public void ChangingProperyDescription_Valid()
        {
            //Arrange
            string newDescription = "New test task";

            //Act
            _task.Description = newDescription;
            var result = _task.Description;

            //Assert
            Assert.AreEqual("New test task", result);
        }

        [Test]
        public void ChangingProperyDate_Valid()
        {
            //Arrange
            string newDate = "12:12:12; 02.01.2000";

            //Act
            _task.Date = newDate;
            var result = _task.Date;

            //Assert
            Assert.AreEqual("12:12:12; 02.01.2000", result);
        }

        [Test]
        public void ChangingProperyComppleted_Valid()
        {
            //Arrange

            //Act
            _task.Completed = true;
            var result = _task.Completed;

            //Assert
            Assert.IsTrue(result);
        }

        [SetUp]
        public void SetUp()
        {
            _task = new Task(0, "Test task", "12:12:12; 01.01.2000", false);
        }
    }
}
import React from "react";
import TaskList from "./Components/TaskList";
import TaskInput from "./Components/TaskInput";

// let taskCounter = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(task) {
    let taskList = [...this.state.tasks];
    taskList.push(task);
    this.setState({ tasks: taskList });
    // taskCounter++;
    // console.log(taskCounter, "taskCounter");
    console.log(taskList, "taskList");
  }

  deleteTask(taskId) {
    let updatedTaskList = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks: updatedTaskList });
  }

  editTask(task) {
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id == task.id) {
        this.state.tasks[i] = task;
        //console.log(tasks, "tasksInForLoop");
      }
    }
  }

  render() {
    console.log(
      this.state.tasks.length,
      "test1",
      typeof this.state.tasks.length
    );

    return (
      <div className="container-fluid">
        <br />
        <h1 style={{ color: "white" }}>Very Simple Todo App</h1>
        <hr style={{ border: "1px solid white" }} />
        <div className="row">
          <div className="col-sm-4">
            <TaskInput addTask={this.addTask} />
          </div>
          <div className="col-sm-8">
            <div className="card border-secondary text-secondary">
              <div className="card-header" style={{ fontWeight: "bold" }}>
                View Todos
              </div>
              <TaskList
                tasks={this.state.tasks}
                editTask={this.editTask}
                deleteTask={this.deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
